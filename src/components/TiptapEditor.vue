<template>
  <div v-if="editor" class="editor-container">
    <div class="editor-toolbar">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <i class="fas fa-bold"></i>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        <i class="fas fa-italic"></i>
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        <i class="fas fa-strikethrough"></i>
      </button>
      <button @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        <i class="fas fa-code"></i>
      </button>
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        <i class="fas fa-paragraph"></i>
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        H1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        H2
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        H3
      </button>
      <button @click="addImage">
        <i class="fas fa-image"></i>
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        <i class="fas fa-list-ul"></i>
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        <i class="fas fa-list-ol"></i>
      </button>
      <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        <i class="fas fa-file-code"></i>
      </button>
      <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        <i class="fas fa-quote-right"></i>
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <i class="fas fa-ruler-horizontal"></i>
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        <i class="fas fa-text-height"></i>
      </button>
      <button @click="editor.chain().focus().undo().run()">
        <i class="fas fa-undo"></i>
      </button>
      <button @click="editor.chain().focus().redo().run()">
        <i class="fas fa-redo"></i>
      </button>
    </div>
    <input type="file" ref="imageInput" @change="handleImageUpload" accept="image/jpeg,image/png,image/jpg,image/gif,image/svg+xml" hidden>
    <div v-if="uploadError" class="upload-error alert alert-danger mb-2">
      <i class="fas fa-exclamation-circle me-2"></i>{{ uploadError }}
    </div>
    <div v-if="uploadLoading" class="upload-loading alert alert-info mb-2">
      <i class="fas fa-spinner fa-spin me-2"></i>Uploading image...
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { watch, onBeforeUnmount, ref } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import api from '../services/api'; // Assuming api service is available

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Image,
  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML());
  },
});

watch(() => props.modelValue, (value) => {
  if (editor.value && value !== editor.value.getHTML()) {
    editor.value.commands.setContent(value, false);
  }
});

const imageInput = ref(null);
const uploadError = ref('');
const uploadLoading = ref(false);

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/svg+xml'];

const addImage = () => {
  uploadError.value = '';
  // Trigger the hidden file input
  imageInput.value.click();
};

// This function handles the file upload to the server.
// IMPORTANT: This assumes you have a backend endpoint at '/upload-image'
// that accepts a multipart/form-data request with a file and returns a JSON
// response like { "url": "path/to/your/image.jpg" }
const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  
  // Reset error and input
  uploadError.value = '';
  event.target.value = '';
  
  if (!file) {
    return;
  }

  // Client-side validation: Check file size
  if (file.size > MAX_IMAGE_SIZE) {
    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    uploadError.value = `Image is too large (${sizeInMB}MB). Maximum allowed size is 2MB. Please compress or resize your image.`;
    setTimeout(() => {
      uploadError.value = '';
    }, 5000);
    return;
  }

  // Client-side validation: Check file type
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    uploadError.value = `Invalid file type. Please upload a JPEG, PNG, GIF, or SVG image.`;
    setTimeout(() => {
      uploadError.value = '';
    }, 5000);
    return;
  }

  uploadLoading.value = true;
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await api.post('/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    let imageUrl = response.data.url;
    
    // Workaround for backend returning wrong port
    if (imageUrl.startsWith('http://localhost/')) {
      imageUrl = imageUrl.replace('http://localhost/', 'http://localhost:8000/');
    }

    if (imageUrl) {
      editor.value.chain().focus().setImage({ src: imageUrl }).run();
    }
  } catch (error) {
    console.error('Image upload failed:', error);
    
    let errorMessage = 'Failed to upload image. ';
    
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      
      if (status === 413 || (data?.errors?.image && data.errors.image.some(msg => msg.includes('2048')))) {
        errorMessage = 'Image is too large. Maximum allowed size is 2MB. Please compress or resize your image.';
      } else if (status === 422 && data?.errors) {
        // Validation errors from Laravel
        const validationErrors = Object.values(data.errors).flat();
        errorMessage = validationErrors.join(' ') || 'Invalid image file. Please check the file format and size.';
      } else if (status === 401) {
        errorMessage = 'You must be logged in to upload images.';
      } else if (status === 500) {
        errorMessage = 'Server error occurred. Please try again later.';
      } else if (data?.message) {
        errorMessage = data.message;
      } else {
        errorMessage = `Upload failed (Error ${status}). Please try again.`;
      }
    } else if (error.request) {
      errorMessage = 'Cannot connect to server. Please check your internet connection and ensure the backend is running.';
    } else {
      errorMessage = error.message || 'An unexpected error occurred. Please try again.';
    }
    
    uploadError.value = errorMessage;
    setTimeout(() => {
      uploadError.value = '';
    }, 5000);
  } finally {
    uploadLoading.value = false;
  }
};


onBeforeUnmount(() => {
  editor.value.destroy();
});
</script>

<style scoped>
.editor-container {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  background-color: #f8f9fa;
}

.editor-toolbar button {
  background: transparent;
  border: none;
  color: #333;
  padding: 5px 8px;
  margin-right: 4px;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.2s ease;
}

.editor-toolbar button:hover {
  background-color: #e2e6ea;
}

.editor-toolbar button.is-active {
  background-color: #007bff;
  color: white;
}

:deep(.tiptap) {
  padding: 12px;
  min-height: 200px;
  outline: none;
}

:deep(.tiptap p:first-child) {
  margin-top: 0;
}

:deep(.tiptap img) {
  max-width: 100%;
  height: auto;
}

.upload-error {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.upload-loading {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>

