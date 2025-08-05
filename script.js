// Updated image data with reliable image URLs
const images = [
    { 
        id: "misty-forest", 
        category: "monochrome", 
        title: "Misty Forest", 
        description: "Black and white forest shrouded in morning fog",
        url: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "modern-geometry", 
        category: "architecture", 
        title: "Modern Geometry", 
        description: "Contemporary building with clean lines",
        url: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "mountain-range", 
        category: "landscapes", 
        title: "Mountain Range", 
        description: "Snow-capped peaks under dramatic skies",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "city-reflections", 
        category: "urban", 
        title: "City Reflections", 
        description: "Urban landscape reflected in rain puddles",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "portrait-study", 
        category: "monochrome", 
        title: "Portrait Study", 
        description: "Classic black and white portrait",
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "concrete-symmetry", 
        category: "architecture", 
        title: "Concrete Symmetry", 
        description: "Brutalist architecture in monochrome",
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "coastal-cliffs", 
        category: "landscapes", 
        title: "Coastal Cliffs", 
        description: "Dramatic ocean meeting rocky shore",
        url: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "metropolis", 
        category: "urban", 
        title: "Metropolis", 
        description: "Skyscrapers piercing the evening sky",
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "desert-dunes", 
        category: "monochrome", 
        title: "Desert Dunes", 
        description: "Sands shaped by wind and time",
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "glass-facade", 
        category: "architecture", 
        title: "Glass Facade", 
        description: "Reflective modern architecture",
        url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "alpine-lake", 
        category: "landscapes", 
        title: "Alpine Lake", 
        description: "Crystal clear mountain waters",
        url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
        id: "neon-streets", 
        category: "urban", 
        title: "Neon Streets", 
        description: "Urban nightscape with vibrant neon signs",
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
    }
];

// DOM elements
const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;

// Generate gallery items
function generateGallery() {
    gallery.innerHTML = '';
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = `gallery-item ${image.category}`;
        item.dataset.index = index;
        
        item.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i>
            </div>
            <img src="${image.url}" alt="${image.title}" style="display:none;">
            <div class="overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        // Preload image and handle errors
        const img = item.querySelector('img');
        img.onload = () => {
            img.style.display = 'block';
            item.querySelector('.loading').style.display = 'none';
        };
        img.onerror = () => {
            // Fallback to a placeholder if image fails to load
            img.src = `https://picsum.photos/id/${index + 100}/600/400?grayscale`;
            img.alt = `Placeholder for ${image.title}`;
            img.style.display = 'block';
            item.querySelector('.loading').style.display = 'none';
        };
        
        item.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(item);
    });
}

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Update lightbox content
function updateLightbox() {
    const image = images[currentIndex];
    lightboxImg.src = image.url.replace('600/400', '1200/800');
    lightboxImg.alt = image.title;
    lightboxCaption.textContent = `${image.title} - ${image.description}`;
}

// Navigation functions
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
}

// Filter gallery
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterGallery(btn.dataset.filter);
    });
});

// Initialize the gallery
generateGallery();