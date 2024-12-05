const services = [
    { title: "서비스 1", description: "서비스 1에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    { title: "서비스 2", description: "서비스 2에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    { title: "서비스 3", description: "서비스 3에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    { title: "서비스 4", description: "서비스 4에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    { title: "서비스 5", description: "서비스 5에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    { title: "서비스 6", description: "서비스 6에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    { title: "서비스 7", description: "서비스 7에 대한 설명입니다.", imgSrc: "https://via.placeholder.com/600x400" },
    // 추가 서비스 항목들
];

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.getElementById('carouselItems');
    const indicators = document.querySelector('.carousel-indicators');

    const itemsPerSlide = 3;  // 한 슬라이드에 표시할 항목 수

    // 동적으로 서비스 항목 추가
    let carouselIndex = 0;
    while (carouselIndex < services.length) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        // 카드들 추가
        for (let i = 0; i < itemsPerSlide; i++) {
            if (carouselIndex < services.length) {
                const service = services[carouselIndex];
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${service.imgSrc}" class="card-img-top" alt="${service.title}">
                    <div class="card-body">
                        <h5 class="card-title">${service.title}</h5>
                        <p class="card-text">${service.description}</p>
                        <a href="#" class="btn btn-primary">자세히 보기</a>
                    </div>
                `;
                carouselItem.appendChild(card);
                carouselIndex++;
            }
        }

        carouselItems.appendChild(carouselItem);
    }

    // 인디케이터 추가
    for (let i = 0; i < Math.ceil(services.length / itemsPerSlide); i++) {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#servicesCarousel');
        indicator.setAttribute('data-bs-slide-to', i);
        if (i === 0) {
            indicator.classList.add('active');
        }
        indicators.appendChild(indicator);
    }
});
