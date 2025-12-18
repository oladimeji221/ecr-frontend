<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '../../composables/useAuth';
import { useRouter } from 'vue-router';

const { registerGuest } = useAuth();
const router = useRouter();
const route = useRoute();

const registrationType = ref('partner'); // Default to partner
const formTitle = computed(() => registrationType.value === 'learner' ? 'Learner Registration' : 'ECR Partner Program Application');

// --- Data for Partners ---
const expertiseCategories = {
    'Personal Development': ['Mindset Coach', 'Confidence Coach', 'Goal Setting Specialist', 'Emotional Intelligence Trainer', 'Personal Growth Mentor'],
    'Entrepreneurship': ['Small Business Coach', 'Startup Advisor', 'Business Strategy Mentor', 'Entrepreneur-in-Residence', 'Side Hustle Consultant'],
    'Finance Literacy': ['Personal Finance Coach', 'Budgeting Specialist', 'Savings and Investment Educator', 'Debt Management Advisor', 'Financial Wellness Trainer'],
    'Lifestyle and Productivity': ['Productivity Coach', 'Time Management Trainer', 'Work-Life Balance Mentor', 'Habit Formation Coach', 'Minimalist Living Educator'],
    'Health and Wellness': ['Fitness and Wellness Coach', 'Nutrition Educator', 'Mental Wellness Advocate', 'Stress Management Trainer', 'Holistic Health Practitioner'],
    'Media and Content Creation': ['Video Content Strategist', 'Social Media Content Creator', 'Podcast Host', 'Script and Storyline Developer', 'Online Community Builder'],
    'Creative Arts': ['Visual Artist', 'Writer and Storyteller', 'Actor and Performance Coach', 'Music and Sound Creative', 'Craft and DIY Creator'],
    'Language and Communication': ['Communication Coach', 'Public Speaking Trainer', 'Writing Skills Instructor', 'Language Tutor', 'Conversation and Dialogue Coach'],
    'Photography and Videography': ['Photographer', 'Videographer', 'Photo Editing Specialist', 'Video Editing Specialist', 'Visual Storytelling Coach'],
    'Logistics and Supply Chain': ['Supply Chain Educator', 'Logistics Operations Trainer', 'Procurement Specialist', 'Inventory Management Coach', 'Transport and Distribution Educator']
};
const contributionTypes = ['Teach a course', 'Create mini-courses', 'Publish articles or tutorials', 'Host webinars', 'Join community events'];

// --- Data for Learners ---
const interestAreas = ['Technology and Digital Skills', 'Business and Entrepreneurship', 'Personal Development', 'Finance and Money Skills', 'Creative Skills', 'Communication and Language', 'Health and Wellness', 'Logistics and Operations', 'Undecided'];
const learningGoals = ['Learn a new skill', 'Improve current skills', 'Career change', 'Start a business', 'Personal growth'];
const howDidYouHear = ['Social Media', 'Friend or Referral', 'Website Search', 'WhatsApp', 'Email', 'Other'];

const countries = ['Nigeria', 'United Kingdom (UK)'];

const phoneCode = ref('+234');
const guarantorPhoneCode = ref('+234');
const countryCodes = [
    { code: '+93', country: 'Afghanistan' },
    { code: '+358', country: 'Aland Islands' },
    { code: '+355', country: 'Albania' },
    { code: '+213', country: 'Algeria' },
    { code: '+1', country: 'American Samoa' },
    { code: '+376', country: 'Andorra' },
    { code: '+244', country: 'Angola' },
    { code: '+1', country: 'Anguilla' },
    { code: '+672', country: 'Antarctica' },
    { code: '+1', country: 'Antigua and Barbuda' },
    { code: '+54', country: 'Argentina' },
    { code: '+374', country: 'Armenia' },
    { code: '+297', country: 'Aruba' },
    { code: '+61', country: 'Australia' },
    { code: '+43', country: 'Austria' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+1', country: 'Bahamas' },
    { code: '+973', country: 'Bahrain' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+1', country: 'Barbados' },
    { code: '+375', country: 'Belarus' },
    { code: '+32', country: 'Belgium' },
    { code: '+501', country: 'Belize' },
    { code: '+229', country: 'Benin' },
    { code: '+1', country: 'Bermuda' },
    { code: '+975', country: 'Bhutan' },
    { code: '+591', country: 'Bolivia' },
    { code: '+387', country: 'Bosnia and Herzegovina' },
    { code: '+267', country: 'Botswana' },
    { code: '+47', country: 'Bouvet Island' },
    { code: '+55', country: 'Brazil' },
    { code: '+246', country: 'British Indian Ocean Territory' },
    { code: '+1', country: 'British Virgin Islands' },
    { code: '+673', country: 'Brunei' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+257', country: 'Burundi' },
    { code: '+855', country: 'Cambodia' },
    { code: '+237', country: 'Cameroon' },
    { code: '+1', country: 'Canada' },
    { code: '+238', country: 'Cape Verde' },
    { code: '+1', country: 'Cayman Islands' },
    { code: '+236', country: 'Central African Republic' },
    { code: '+235', country: 'Chad' },
    { code: '+56', country: 'Chile' },
    { code: '+86', country: 'China' },
    { code: '+61', country: 'Christmas Island' },
    { code: '+61', country: 'Cocos Islands' },
    { code: '+57', country: 'Colombia' },
    { code: '+269', country: 'Comoros' },
    { code: '+243', country: 'Congo, Democratic Republic of the' },
    { code: '+242', country: 'Congo, Republic of the' },
    { code: '+682', country: 'Cook Islands' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+225', country: "Cote d'Ivoire" },
    { code: '+385', country: 'Croatia' },
    { code: '+53', country: 'Cuba' },
    { code: '+599', country: 'Curacao' },
    { code: '+357', country: 'Cyprus' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+45', country: 'Denmark' },
    { code: '+253', country: 'Djibouti' },
    { code: '+1', country: 'Dominica' },
    { code: '+1', country: 'Dominican Republic' },
    { code: '+593', country: 'Ecuador' },
    { code: '+20', country: 'Egypt' },
    { code: '+503', country: 'El Salvador' },
    { code: '+240', country: 'Equatorial Guinea' },
    { code: '+291', country: 'Eritrea' },
    { code: '+372', country: 'Estonia' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+500', country: 'Falkland Islands' },
    { code: '+298', country: 'Faroe Islands' },
    { code: '+679', country: 'Fiji' },
    { code: '+358', country: 'Finland' },
    { code: '+33', country: 'France' },
    { code: '+594', country: 'French Guiana' },
    { code: '+689', country: 'French Polynesia' },
    { code: '+262', country: 'French Southern Territories' },
    { code: '+241', country: 'Gabon' },
    { code: '+220', country: 'Gambia' },
    { code: '+995', country: 'Georgia' },
    { code: '+49', country: 'Germany' },
    { code: '+233', country: 'Ghana' },
    { code: '+350', country: 'Gibraltar' },
    { code: '+30', country: 'Greece' },
    { code: '+299', country: 'Greenland' },
    { code: '+1', country: 'Grenada' },
    { code: '+590', country: 'Guadeloupe' },
    { code: '+1', country: 'Guam' },
    { code: '+502', country: 'Guatemala' },
    { code: '+44', country: 'Guernsey' },
    { code: '+224', country: 'Guinea' },
    { code: '+245', country: 'Guinea-Bissau' },
    { code: '+592', country: 'Guyana' },
    { code: '+509', country: 'Haiti' },
    { code: '+672', country: 'Heard Island and McDonald Islands' },
    { code: '+504', country: 'Honduras' },
    { code: '+852', country: 'Hong Kong' },
    { code: '+36', country: 'Hungary' },
    { code: '+354', country: 'Iceland' },
    { code: '+91', country: 'India' },
    { code: '+62', country: 'Indonesia' },
    { code: '+98', country: 'Iran' },
    { code: '+964', country: 'Iraq' },
    { code: '+353', country: 'Ireland' },
    { code: '+44', country: 'Isle of Man' },
    { code: '+972', country: 'Israel' },
    { code: '+39', country: 'Italy' },
    { code: '+1', country: 'Jamaica' },
    { code: '+81', country: 'Japan' },
    { code: '+44', country: 'Jersey' },
    { code: '+962', country: 'Jordan' },
    { code: '+7', country: 'Kazakhstan' },
    { code: '+254', country: 'Kenya' },
    { code: '+686', country: 'Kiribati' },
    { code: '+383', country: 'Kosovo' },
    { code: '+965', country: 'Kuwait' },
    { code: '+996', country: 'Kyrgyzstan' },
    { code: '+856', country: "Lao People's Democratic Republic" },
    { code: '+371', country: 'Latvia' },
    { code: '+961', country: 'Lebanon' },
    { code: '+266', country: 'Lesotho' },
    { code: '+231', country: 'Liberia' },
    { code: '+218', country: 'Libya' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+370', country: 'Lithuania' },
    { code: '+352', country: 'Luxembourg' },
    { code: '+853', country: 'Macao' },
    { code: '+389', country: 'Macedonia' },
    { code: '+261', country: 'Madagascar' },
    { code: '+265', country: 'Malawi' },
    { code: '+60', country: 'Malaysia' },
    { code: '+960', country: 'Maldives' },
    { code: '+223', country: 'Mali' },
    { code: '+356', country: 'Malta' },
    { code: '+692', country: 'Marshall Islands' },
    { code: '+596', country: 'Martinique' },
    { code: '+222', country: 'Mauritania' },
    { code: '+230', country: 'Mauritius' },
    { code: '+262', country: 'Mayotte' },
    { code: '+52', country: 'Mexico' },
    { code: '+691', country: 'Micronesia' },
    { code: '+373', country: 'Moldova' },
    { code: '+377', country: 'Monaco' },
    { code: '+976', country: 'Mongolia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+1', country: 'Montserrat' },
    { code: '+212', country: 'Morocco' },
    { code: '+258', country: 'Mozambique' },
    { code: '+95', country: 'Myanmar' },
    { code: '+264', country: 'Namibia' },
    { code: '+674', country: 'Nauru' },
    { code: '+977', country: 'Nepal' },
    { code: '+31', country: 'Netherlands' },
    { code: '+687', country: 'New Caledonia' },
    { code: '+64', country: 'New Zealand' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+227', country: 'Niger' },
    { code: '+234', country: 'Nigeria' },
    { code: '+683', country: 'Niue' },
    { code: '+672', country: 'Norfolk Island' },
    { code: '+850', country: 'North Korea' },
    { code: '+1', country: 'Northern Mariana Islands' },
    { code: '+47', country: 'Norway' },
    { code: '+968', country: 'Oman' },
    { code: '+92', country: 'Pakistan' },
    { code: '+680', country: 'Palau' },
    { code: '+970', country: 'Palestinian Territory' },
    { code: '+507', country: 'Panama' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+595', country: 'Paraguay' },
    { code: '+51', country: 'Peru' },
    { code: '+63', country: 'Philippines' },
    { code: '+870', country: 'Pitcairn' },
    { code: '+48', country: 'Poland' },
    { code: '+351', country: 'Portugal' },
    { code: '+1', country: 'Puerto Rico' },
    { code: '+974', country: 'Qatar' },
    { code: '+262', country: 'Reunion' },
    { code: '+40', country: 'Romania' },
    { code: '+7', country: 'Russia' },
    { code: '+250', country: 'Rwanda' },
    { code: '+590', country: 'Saint Barthelemy' },
    { code: '+290', country: 'Saint Helena' },
    { code: '+1', country: 'Saint Kitts and Nevis' },
    { code: '+1', country: 'Saint Lucia' },
    { code: '+590', country: 'Saint Martin' },
    { code: '+508', country: 'Saint Pierre and Miquelon' },
    { code: '+1', country: 'Saint Vincent and the Grenadines' },
    { code: '+685', country: 'Samoa' },
    { code: '+378', country: 'San Marino' },
    { code: '+239', country: 'Sao Tome and Principe' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+221', country: 'Senegal' },
    { code: '+381', country: 'Serbia' },
    { code: '+248', country: 'Seychelles' },
    { code: '+232', country: 'Sierra Leone' },
    { code: '+65', country: 'Singapore' },
    { code: '+1', country: 'Sint Maarten' },
    { code: '+421', country: 'Slovakia' },
    { code: '+386', country: 'Slovenia' },
    { code: '+677', country: 'Solomon Islands' },
    { code: '+252', country: 'Somalia' },
    { code: '+27', country: 'South Africa' },
    { code: '+500', country: 'South Georgia and the South Sandwich Islands' },
    { code: '+82', country: 'South Korea' },
    { code: '+211', country: 'South Sudan' },
    { code: '+34', country: 'Spain' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+249', country: 'Sudan' },
    { code: '+597', country: 'Suriname' },
    { code: '+47', country: 'Svalbard and Jan Mayen' },
    { code: '+268', country: 'Swaziland' },
    { code: '+46', country: 'Sweden' },
    { code: '+41', country: 'Switzerland' },
    { code: '+963', country: 'Syrian Arab Republic' },
    { code: '+886', country: 'Taiwan' },
    { code: '+992', country: 'Tajikistan' },
    { code: '+255', country: 'Tanzania' },
    { code: '+66', country: 'Thailand' },
    { code: '+670', country: 'Timor-Leste' },
    { code: '+228', country: 'Togo' },
    { code: '+690', country: 'Tokelau' },
    { code: '+676', country: 'Tonga' },
    { code: '+1', country: 'Trinidad and Tobago' },
    { code: '+216', country: 'Tunisia' },
    { code: '+90', country: 'Turkey' },
    { code: '+993', country: 'Turkmenistan' },
    { code: '+1', country: 'Turks and Caicos Islands' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+1', country: 'U.S. Virgin Islands' },
    { code: '+971', country: 'UAE' },
    { code: '+1', country: 'United States Minor Outlying Islands' },
    { code: '+256', country: 'Uganda' },
    { code: '+380', country: 'Ukraine' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+1', country: 'United States' },
    { code: '+598', country: 'Uruguay' },
    { code: '+998', country: 'Uzbekistan' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+379', country: 'Vatican City' },
    { code: '+58', country: 'Venezuela' },
    { code: '+84', country: 'Vietnam' },
    { code: '+681', country: 'Wallis and Futuna' },
    { code: '+212', country: 'Western Sahara' },
    { code: '+967', country: 'Yemen' },
    { code: '+260', country: 'Zambia' },
    { code: '+263', country: 'Zimbabwe' },
];

// --- Form State ---
const formData = ref({
    // Common fields
    full_name: '', email: '', phone_number: '', country: '', password: '', password_confirmation: '',
    category: '', // To store 'learner' or 'partner'

    // Partner-specific
    expertise_category: '', role_specialization: '', contribution_type: [],
    short_bio: '', skills_or_tools: '',
    linkedin_link: '', youtube_link: '', medium_blog_link: '', github_link: '',
    sample_work_path: null,

    // Learner-specific
    primary_interest_area: '', learning_goal: '',
    guarantor_full_name: '', guarantor_phone_number: '', relationship_to_learner: '',
    how_did_you_hear: '', coupon_code: '',

    // Agreements
    agreed_to_terms: false,
});

const availableRoles = computed(() => formData.value.expertise_category ? expertiseCategories[formData.value.expertise_category] || [] : []);
watch(() => formData.value.expertise_category, () => { formData.value.role_specialization = ''; });

const loading = ref(false);
const error = ref(null);
const success = ref(null);
const passwordFieldType = ref('password');

const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        // Validate payload size (20MB limit)
        if (file.size > 20 * 1024 * 1024) {
             error.value = 'File size exceeds the maximum limit of 20MB.';
             e.target.value = ''; // Reset input
             formData.value.sample_work_path = null;
             return;
        }
        formData.value.sample_work_path = file;
    }
};

const handleRegister = async () => {
    loading.value = true;
    error.value = null;
    success.value = null;

    if (formData.value.password !== formData.value.password_confirmation) {
        error.value = 'Passwords do not match.';
        loading.value = false;
        return;
    }
    
    formData.value.category = registrationType.value; // Set the category before sending

    const formPayload = new FormData();
    Object.keys(formData.value).forEach(key => {
        const value = formData.value[key];
        if (value !== null && value !== '') {
            if (key === 'contribution_type' && Array.isArray(value)) {
                value.forEach(ct => formPayload.append('contribution_type[]', ct));
            } else if (key === 'phone_number') {
                formPayload.append(key, phoneCode.value + value);
            } else if (key === 'guarantor_phone_number') {
                formPayload.append(key, guarantorPhoneCode.value + value);
            } else if (key === 'agreed_to_terms') {
                formPayload.append(key, value ? '1' : '0');
            } else {
                formPayload.append(key, value);
            }
        }
    });

    try {
        await registerGuest(formPayload);
        success.value = 'Registration successful! Thank you for joining.';
        setTimeout(() => { router.push('/under-construction'); }, 3000);
    } catch (err) {
        if (err.response && err.response.data && err.response.data.errors) {
            error.value = Object.values(err.response.data.errors).flat().join(' ');
        } else {
            error.value = 'Registration failed. Please check your input and try again.';
        }
    } finally {
        loading.value = false;
    }
};

const togglePasswordVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};

// Watch for changes in the route query to set the registration type
onMounted(() => {
    registrationType.value = route.query.type || 'partner';
});
watch(() => route.query.type, (newType) => {
    registrationType.value = newType || 'partner';
});

</script>

<template>  
    <main class="auth-minimal-wrapper">
        <div class="auth-minimal-inner">
            <div class="minimal-card-wrapper">
                <div class="card mb-4 mt-5 mx-4 mx-sm-0 position-relative" style="max-width: 1200px;">
                    <!-- Logo -->
                    <div class="wd-100 bg-white p-3 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                        <img src="/images/logo.png" alt="" class="img-fluid">
                    </div>
                    
                    <div class="card-body p-sm-5">
                        <!-- Title -->
                        <h2 class="fs-20 fw-bolder mb-4">{{ formTitle }}</h2>
                        <h4 class="fs-13 fw-bold mb-2">Manage all your ECR activities</h4>
                        <p class="fs-12 fw-medium text-muted">Let's get you all setup, so you can verify your account and begin setting up your profile.</p>
                        
                        <!-- Alerts -->
                        <div v-if="success" class="alert alert-success">{{ success }}</div>
                        <div v-if="error" class="alert alert-danger">{{ error }}</div>
                        
                        <!-- Form -->
                        <form @submit.prevent="handleRegister" class="w-100 mt-4 pt-2">
                            <!-- A. Basic Information (Common to both) -->
                            <h5 class="mb-3">A. Basic Information</h5>
                            
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <input type="text" class="form-control" v-model="formData.full_name" placeholder="Full Name" id="full_name" required>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <input type="email" class="form-control" v-model="formData.email" placeholder="Email" id="emailaddress" required>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="input-group">
                                        <select class="form-select" v-model="phoneCode" style="max-width: 110px;">
                                            <option v-for="item in countryCodes" :key="item.code" :value="item.code">{{ item.code }}</option>
                                        </select>
                                        <input class="form-control" v-model="formData.phone_number" type="tel" id="phone_number" required placeholder="Phone Number">
                                    </div>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <select class="form-select" v-model="formData.country" id="country" required>
                                        <option value="" disabled>Select Country</option>
                                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="input-group">
                                        <input class="form-control" v-model="formData.password" :type="passwordFieldType" required id="password" placeholder="Password" autocomplete="new-password">
                                        <span class="input-group-text c-pointer" @click="togglePasswordVisibility">
                                            <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <input type="password" class="form-control" v-model="formData.password_confirmation" placeholder="Confirm Password" id="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>
                            
                            <!-- B. Partner-Specific Fields -->
                            <div v-if="registrationType === 'partner'">
                                <h5 class="mb-3 mt-4">B. Professional Profile</h5>
                                
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <select class="form-select" v-model="formData.expertise_category" id="expertise_category" required>
                                            <option value="" disabled>Select Expertise Category</option>
                                            <option v-for="(roles, category) in expertiseCategories" :key="category" :value="category">{{ category }}</option>
                                        </select>
                                    </div>
                                    
                                    <div class="col-md-6 mb-4">
                                        <select class="form-select" v-model="formData.role_specialization" id="role_specialization" required :disabled="!availableRoles.length">
                                            <option value="" disabled>Select Role / Specialization</option>
                                            <option v-for="role in availableRoles" :key="role" :value="role">{{ role }}</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <h5 class="mb-3 mt-4">C. Contribution Type</h5>
                                <div class="mb-3">
                                    <label class="form-label">Select all that apply</label>
                                    <div class="row">
                                        <div v-for="type in contributionTypes" :key="type" class="col-md-6 mb-2">
                                            <div class="custom-control custom-checkbox">
                                                <input class="custom-control-input" type="checkbox" :value="type" v-model="formData.contribution_type" :id="type">
                                                <label class="custom-control-label c-pointer" :for="type">{{ type }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <h5 class="mb-3 mt-4">D. Additional Information</h5>
                                <div class="mb-4">
                                    <textarea class="form-control" v-model="formData.short_bio" id="short_bio" rows="3" placeholder="Short Bio" required></textarea>
                                </div>
                                
                                <div class="mb-4">
                                    <textarea class="form-control" v-model="formData.skills_or_tools" id="skills_or_tools" rows="2" placeholder="Skills or Tools Used" required></textarea>
                                </div>
                                
                                <h6 class="mb-3">Portfolio Links</h6>
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <input class="form-control" v-model="formData.linkedin_link" type="url" id="linkedin_link" placeholder="LinkedIn URL">
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <input class="form-control" v-model="formData.youtube_link" type="url" id="youtube_link" placeholder="YouTube URL">
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <input class="form-control" v-model="formData.medium_blog_link" type="url" id="medium_blog_link" placeholder="Medium / Blog URL">
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <input class="form-control" v-model="formData.github_link" type="url" id="github_link" placeholder="GitHub URL (Optional)">
                                    </div>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="sample_work_path" class="form-label">Upload Sample Work (PDF, PPT, Video - Max 20MB)</label>
                                    <input class="form-control" type="file" @change="onFileChange" id="sample_work_path" accept=".pdf,.ppt,.pptx,.mp4,.mov,.avi">
                                </div>
                            </div>
                            
                            <!-- C. Learner-Specific Fields -->
                            <div v-if="registrationType === 'learner'">
                                <h5 class="mb-3 mt-4">B. Learning Interest</h5>
                                
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <select class="form-select" v-model="formData.primary_interest_area" id="primary_interest_area" required>
                                            <option value="" disabled>Select Primary Interest Area</option>
                                            <option v-for="area in interestAreas" :key="area" :value="area">{{ area }}</option>
                                        </select>
                                    </div>
                                    
                                    <div class="col-md-6 mb-4">
                                        <select class="form-select" v-model="formData.learning_goal" id="learning_goal" required>
                                            <option value="" disabled>Select Learning Goal</option>
                                            <option v-for="goal in learningGoals" :key="goal" :value="goal">{{ goal }}</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <h5 class="mb-3 mt-4">C. Guarantor Details</h5>
                                <p class="text-muted fs-13">Required for selected programs or payment plans.</p>
                                
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <input class="form-control" v-model="formData.guarantor_full_name" type="text" id="guarantor_full_name" placeholder="Guarantor Full Name">
                                    </div>
                                    
                                    <div class="col-md-6 mb-4">
                                        <div class="input-group">
                                            <select class="form-select" v-model="guarantorPhoneCode" style="max-width: 110px;">
                                                <option v-for="item in countryCodes" :key="item.code" :value="item.code">{{ item.code }}</option>
                                            </select>
                                            <input class="form-control" v-model="formData.guarantor_phone_number" type="tel" id="guarantor_phone_number" placeholder="Guarantor Phone">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mb-4">
                                    <input class="form-control" v-model="formData.relationship_to_learner" type="text" id="relationship_to_learner" placeholder="Relationship to Learner">
                                </div>
                                
                                <h5 class="mb-3 mt-4">D. How Did You Hear About Us? (Optional)</h5>
                                <div class="mb-4">
                                    <select class="form-select" v-model="formData.how_did_you_hear">
                                        <option value="" disabled>Select an option</option>
                                        <option v-for="source in howDidYouHear" :key="source" :value="source">{{ source }}</option>
                                    </select>
                                </div>
                                
                                <h5 class="mb-3 mt-4">E. Coupon Code (Optional)</h5>
                                <div class="mb-4">
                                    <input class="form-control" v-model="formData.coupon_code" type="text" placeholder="Enter coupon code">
                                </div>
                            </div>
                            
                            <!-- F. Agreements -->
                            <div class="mt-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="agreed_to_terms" v-model="formData.agreed_to_terms" required>
                                    <label class="custom-control-label c-pointer text-muted" for="agreed_to_terms" style="font-weight: 400 !important">I agree to all the <a href="#">Terms & Conditions</a> and <a href="#">Fees</a>.</label>
                                </div>
                            </div>
                            
                            <!-- Submit Button -->
                            <div class="mt-5">
                                <button type="submit" class="btn btn-lg btn-primary w-100" :disabled="loading">
                                    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                                    <span v-else>Create Account</span>
                                </button>
                            </div>
                        </form>
                        
                        <!-- Login Link -->
                        <div class="mt-5 text-muted">
                            <span>Already have an account?</span>
                            <router-link to="/guest-login" class="fw-bold">Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Override the minimal-card-wrapper constraints to allow wider forms */
.minimal-card-wrapper {
    max-width: 100% !important;
    width: 100% !important;
}

.auth-minimal-wrapper {
    padding: 2rem 1rem;
}

.card {
    margin-left: auto !important;
    margin-right: auto !important;
}

/* Ensure the card body has proper padding */
.card-body {
    padding: 3rem 2.5rem !important;
}

@media (max-width: 768px) {
    .card-body {
        padding: 2rem 1.5rem !important;
    }
}
</style>