function submitForm() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        closePopup();
        showWelcomeMessage(username);
        loadPage('home');
        return false;
    }
    return false;
}

function showWelcomeMessage(username) {
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = `Добредојдовте, ${username}`;
    welcomeMessage.style.display = "block";
}

function openPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function changeText() {
    alert("Button clicked!");
}

function loadPage(page) {
    var content = document.getElementById('content');
    var pageTitle = document.title;

    switch (page) {

        case 'home':
            content.innerHTML = `
                <section class="home-welcome">
                    <h2>Добредојдовте во Running Peak</h2>
                    <p>Вашиот извор за сѐ поврзано со трчање.</p>
                </section>
                <section class="home-products">
                    <div class="product">
                        <a href="#" onclick="loadCategory('shoes')"><img src="Sliki/shoes.jpg" alt="Патики"></a>
                        <a href="#" onclick="loadCategory('shoes')"><h3>Патики</h3></a>
                        <p>Патиките за трчање се специјално дизајнирани атлетски патики наменети да обезбедат удобност, поддршка и амортизација за поединци кои се занимаваат со трчање</p>
                    </div>
                    <div class="product">
                        <a href="#" onclick="loadCategory('clothes')"><img src="Sliki/clothes.jpg" alt="Облека"></a>
                        <a href="#" onclick="loadCategory('clothes')"><h3>Облека</h3></a>
                        <p>Облеката за трчање е атлетска облека дизајнирана да ја подобри удобноста и да ја оптимизира регулацијата на телесната температура за време на трчање и други физички активности</p>
                    </div>
                    <div class="product">
                        <a href="#" onclick="loadCategory('watches')"><img src="Sliki/watches.jpg" alt="Часовници"></a>
                        <a href="#" onclick="loadCategory('watches')"><h3>Часовници</h3></a>
                        <p>Часовниците за трчање се уреди за носење опремени со напредни функции како што се GPS следење, следење на отчукувањата на срцето и други фитнес функционалности</p>
                    </div>
                </section>
            `;
            pageTitle = "Running Peak - Дома";

            var homeProducts = document.querySelectorAll('.home-products .product');
            homeProducts.forEach(function(product) {
                product.classList.add('home-product');
            });
            break;

        case 'products':
            content.innerHTML = `
                <h2>Нашите производи</h2>
                <div class="dropdown">
                    <span>Categories</span>
                    <div class="dropdown-content">
                        <a href="#" onclick="loadCategory('shoes')">Патики</a>
                        <a href="#" onclick="loadCategory('clothes')">Облека</a>
                        <a href="#" onclick="loadCategory('watches')">Часовници</a>
                    </div>
                </div>
            `;
            pageTitle = "Running Peak - Производи";
            break;

        case 'survey':
            content.innerHTML = `
                <section id="survey-section">
                <h2>Анкета</h2>
                <p>Ги цениме вашите повратни информации. Одвоете малку време за да ја пополните нашата анкета.</p>
                
                <form id="surveyForm">
                    <label for="overallExperience">Целокупно искуство (1-10):</label>
                    <input type="number" id="overallExperience" name="overallExperience" min="1" max="10" required>

                    <label for="productQuality">Квалитет на производи (1-10):</label>
                    <input type="number" id="productQuality" name="productQuality" min="1" max="10" required>

                    <label for="customerService">Услуга (1-10):</label>
                    <input type="number" id="customerService" name="customerService" min="1" max="10" required>

                    <label for="recommendation">Колкава е веројатноста да не препорачате? (1-10):</label>
                    <input type="number" id="recommendation" name="recommendation" min="1" max="10" required>

                    <label for="comments">Дополнителни коментари:</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>

                    <button type="submit">Поднесете анкета</button>
                </form>
            </section>
            `;
            const surveyForm = document.getElementById('surveyForm');
            surveyForm.addEventListener('submit', function (event) {
            event.preventDefault();

            clearSurveyFormInputs();
            showSurveyCompletionMessage();
            });
            pageTitle = "Running Peak - Анкета";
            break;

        case 'contact':
            content.innerHTML = `
                <section id="contact-section">
                    <h2>Контактирајте не</h2>
                    <p>Слободно контактирајте нѐ за било какви прашања</p>
                </section>
                <section id="contact-form">
                    <form id="contactForm">
                        <label for="name">Име:</label>
                        <input type="text" id="name" name="name" required>

                        <label for="email">Емаил:</label>
                        <input type="email" id="email" name="email" required>

                        <label for="message">Порака:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Испрати порака</button>
                    </form>
                </section>
                <section id="contact-info">
                    <div class="contact-item">
                        <h3>Емаил</h3>
                        <p>info@runningpeak.com</p>
                    </div>
                    <div class="contact-item">
                        <h3>Телефонски број</h3>
                        <p>070 123 456</p>
                    </div>
                    <div class="contact-item">
                        <h3>Адреса</h3>
                        <p>Ул. Партизански Одреди бр.23</p>
                    </div>
                </section>
            `;
            pageTitle = "Running Peak - Контакт";

            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', submitContactForm);
            break;
        }
        

    document.title = pageTitle;
}

function submitContactForm(event) {
    event.preventDefault(); 

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    showPopup('Пораката е испратена!');
}

function showPopup(message) {
    alert(message);
}

function clearSurveyFormInputs() {
    document.getElementById('overallExperience').value = '';
    document.getElementById('productQuality').value = '';
    document.getElementById('customerService').value = '';
    document.getElementById('recommendation').value = '';
    document.getElementById('comments').value = '';
}

function showSurveyCompletionMessage() {
    alert('Ви благодариме за одвоеното време! Вашата анкета е поднесена.');
}

function loadCategory(category) {
    var content = document.getElementById('content');
    var pageTitle = document.title;

    switch (category) {
        case 'shoes':
            content.innerHTML = `
                <section>
                    <h2>Патики За Трчање</h2>
                    <p>Истражете ја нашата колекција на патики за трчање</p>
                </section>
                <section class="product-list">
                    ${generateProductHTML('shoe1', 'Nike Air Zoom Pegasus 40', 'Responsive and versatile running shoe')}
                    ${generateProductHTML('shoe2', 'Nike Vomero 17', 'Plush-cushioned premium running shoe')}
                    ${generateProductHTML('shoe3', 'Nike Zoom Fly 5', 'Lightweight and responsive running shoe')}
                    ${generateProductHTML('shoe4', 'Nike ZoomX Streakfly', 'Fast racing shoe with sleek design')}
                    ${generateProductHTML('shoe5', 'Adidas Adizero RC 4', 'Lightweight, speedy racing shoe')}
                    ${generateProductHTML('shoe6', 'Adidas Adizero Adios 8', 'Lightweight, responsive, and fast')}
                    ${generateProductHTML('shoe7', 'Adidas Adizero SL', 'Ultra-light and agile running shoe')}
                    ${generateProductHTML('shoe8', 'Adidas Adizero Adios 7', 'Lightweight and fast')}
                    ${generateProductHTML('shoe9', 'Asics Gel-Nimbus 25', 'Premium cushioning for long-distance comfort')}
                    ${generateProductHTML('shoe10', 'Asics Novablast 3', 'Responsive, lightweight running shoe')}
                    ${generateProductHTML('shoe11', 'Asics Gel-Cumulus 25', 'Cushioned comfort for neutral runners')}
                    ${generateProductHTML('shoe12', 'Asics Gel-Pulse 14', 'Reliable cushioning for versatile running')}
                </section>
            `;
            pageTitle = "Running Peak - Патики";
            break;
        case 'clothes':
            content.innerHTML = `
                <section>
                    <h2>Облека За Трчање</h2>
                    <p>Истражете ја нашата колекција на облека за трчање</p>
                </section>
                <section class="product-list">
                    ${generateProductHTML('clothes1', 'Nike Dri-Fit Heritage Shirt', 'Moisture-wicking comfort')}
                    ${generateProductHTML('clothes2', 'Nike Dri-Fit Challenger', 'Breathable and lightweight')}
                    ${generateProductHTML('clothes3', 'Nike Miler Repel Jacket', 'Water-resistant and lightweight')}
                    ${generateProductHTML('clothes4', 'Nike Dri-Fit Challenger Woven Pants', 'Lightweight and breathable')}
                    ${generateProductHTML('clothes5', 'Adidas Own The Run Shirt', 'Confidence-inspiring, breathable performance')}
                    ${generateProductHTML('clothes6', 'Adidas Own The Run Heather Shorts', 'Comfortable and stylish')}
                    ${generateProductHTML('clothes7', 'Adidas Own The Running Jacket', 'Lightweightand stylish')}
                    ${generateProductHTML('clothes8', 'Adidas Own The Run Astro Pants', 'Versatile and comfortable')}
                    ${generateProductHTML('clothes9', 'Asics Race Shirt', 'Streamlined design')}
                    ${generateProductHTML('clothes10', 'Asics Road Shorts', 'Comfortable and durable')}
                    ${generateProductHTML('clothes11', 'Asics Fujitrail Waterproof Jacket', 'Weather-ready and durable')}
                    ${generateProductHTML('clothes12', 'Asics Winter Run Pants', 'Insulated and wind-resistant')}
                </section>
            `;
            pageTitle = "Running Peak - Облека";
            break;
        case 'watches':
            content.innerHTML = `
                <section>
                    <h2>Смарт Часовници За Трчање</h2>
                    <p>Истражете ја нашата колекција на часовници за трчање</p>
                </section>
                <section class="product-list">
                    ${generateProductHTML('watch1', 'Garmin Forerunner 965', 'GPS running watch with advanced training features')}
                    ${generateProductHTML('watch2', 'Garmin fēnix 7X Pro', 'Smartwatch with fitness and health tracking capabilities')}
                    ${generateProductHTML('watch3', 'Garmin epix Pro (Gen 2)', 'Durable and long-lasting multisport GPS watch')}
                    ${generateProductHTML('watch4', 'Garmin Instinct® 2', 'Built for adventures with long battery life')}
                    ${generateProductHTML('watch5', 'Coros Vertix 2', 'Durable and feature-packed multisport GPS watch ')}
                    ${generateProductHTML('watch6', 'Coros Apex 2', 'Health-focused smartwatch with EDA and ECG sensors.')}
                    ${generateProductHTML('watch7', 'Coros Pace 3', 'High-end watch with a low-end price tag')}
                    ${generateProductHTML('watch8', 'Coros Apex 2 Pro', 'Stylish smartwatch with multiple sports modes.')}
                    ${generateProductHTML('watch9', 'Polar Vantage V3', 'Smartwatch with fitness and health tracking capabilities')}
                    ${generateProductHTML('watch10', 'Polar Ignite 3', 'A smartwatch that feels more like a fitness tracker')}
                    ${generateProductHTML('watch11', 'Polar Pacer Pro', 'Advanced health and fitness tracking features')}
                    ${generateProductHTML('watch12', 'Polar Grit X Pro', 'High-end GPS smartwatch with long battery life')}
                </section>
            `;
            pageTitle = "Running Peak - Часовници";
            break;
    }

    document.title = pageTitle;

    hideDropdown();
}

function generateProductHTML(productId, productName, productDescription) {
    const productLink = getProductLink(productId);

    return `
        <div class="product">
            <a href="${productLink}" target="_blank">
                <img src="Sliki/${productId}.jpg" alt="${productName}">
                <h3>${productName}</h3>
            </a>
            <p>${productDescription}</p>
            <div class="interaction-section">
                <button id="like-button-${productId}" onclick="likeProduct('${productId}')">Like</button>
                <div class="comment-section">
                    <h4>Коментари</h4>
                    <ul id="comments-${productId}"></ul>
                    <textarea id="comment-input-${productId}" placeholder="Оставете коментар за производот"></textarea>
                    <button onclick="addComment('${productId}')">Оставете коментар</button>
                </div>
            </div>
        </div>
    `;
}

function getProductLink(productId) {
    const productLinks = {
        shoe1: 'https://www.nike.com/t/pegasus-40-mens-road-running-shoes-mVJdmS/FB7179-001',
        shoe2: 'https://www.nike.com/t/vomero-17-mens-road-running-shoes-ThMlMm/FB1309-003',
        shoe3: 'https://www.nike.com/t/zoom-fly-5-eliud-kipchoge-mens-road-racing-shoes-jGsdSl/DM8968-600',
        shoe4: 'https://www.nike.com/t/streakfly-mens-road-racing-shoes-8rTxtR/DJ6566-600',
        shoe5: 'https://www.adidas.com/us/adizero-rc-4-running-shoes/GY8404.html',
        shoe6: 'https://www.adidas.com/us/adizero-adios-8-running-shoes/HP9721.html',
        shoe7: 'https://www.adidas.com/us/adizero-sl-running-shoes/ID6933.html',
        shoe8: 'https://www.adidas.com/us/adizero-rc-5-running-shoes/GX9781.html',
        shoe9: 'https://www.asics.com/us/en-us/gel-nimbus-25/p/ANA_1011B547-403.html',
        shoe10: 'https://www.asics.com/us/en-us/novablast-3/p/ANA_1011B458-005.html',
        shoe11: 'https://www.asics.com/us/en-us/gel-cumulus%C2%AE-25/p/ANA_1011B621-400.html',
        shoe12: 'https://www.asics.com/us/en-us/gel-pulse-14/p/ANA_1011B596-003.html',
        clothes1: 'https://www.nike.com/t/dri-fit-mens-swoosh-training-t-shirt-LwDhZh/CZ9724-010',
        clothes2: 'https://www.nike.com/t/challenger-mens-dri-fit-5-brief-lined-running-shorts-ws9tBg/DV9363-010',
        clothes3: 'https://www.nike.com/t/miler-mens-repel-running-jacket-t0WR1s/DD4746-010',
        clothes4: 'https://www.nike.com/t/dri-fit-challenger-mens-woven-running-pants-VwT2cP/DD4894-084',
        clothes5: 'https://www.adidas.com/us/own-the-run-tee/H58591.html',
        clothes6: 'https://www.adidas.com/us/own-the-run-heather-shorts/HR6615.html',
        clothes7: 'https://www.adidas.com/us/own-the-run-jacket/IL4790.html',
        clothes8: 'https://www.adidas.com/us/own-the-run-astro-knit-pants/HN0806.html',
        clothes9: 'https://www.asics.com/us/en-us/mens-race-short-sleeve-top/p/ANA_2011A781-002.html',
        clothes10: 'https://www.asics.com/us/en-us/mens-road-7in-short/p/ANA_2011C392-301.html',
        clothes11: 'https://www.asics.com/us/en-us/mens-fujitrail-waterproof-jacket/p/ANA_2011C259-600.html',
        clothes12: 'https://www.asics.com/us/en-us/winter-run-tight/p/ANA_2011C881-020.html',
        watch1: 'https://www.garmin.com/en-US/p/886725/pn/010-02809-02',
        watch2: 'https://www.garmin.com/en-US/p/866230/pn/010-02778-14',
        watch3: 'https://www.garmin.com/en-US/p/884088/pn/010-02804-00',
        watch4: 'https://www.garmin.com/en-US/p/775421',
        watch5: 'https://coros.com/vertix2',
        watch6: 'https://coros.com/apex2',
        watch7: 'https://coros.com/pace3',
        watch8: 'https://coros.com/apex2',
        watch9: 'https://www.polar.com/en/vantage/v3',
        watch10: 'https://www.polar.com/en/ignite3',
        watch11: 'https://www.polar.com/en/pacer-pro',
        watch12: 'https://www.polar.com/en/grit-x-pro?sku=90085773',
    };

    return productLinks[productId] || null;
}

function likeProduct(productId) {
    const username = document.getElementById('username').value;
    const commentsList = document.getElementById(`comments-${productId}`);

    const existingLike = Array.from(commentsList.children).find(
        (comment) => comment.dataset.like === username
    );

    if (existingLike) {
        commentsList.removeChild(existingLike);
        updateLikeButton(productId, 'Like');
    } else {
        const likeMessage = document.createElement('li');
        likeMessage.innerHTML = `На <strong>${username}</strong> им се допаѓа производот`;
        likeMessage.dataset.like = username;
        commentsList.appendChild(likeMessage);
        updateLikeButton(productId, 'Dislike');
    }
}

function updateLikeButton(productId, buttonText) {
    const likeButton = document.getElementById(`like-button-${productId}`);
    if (likeButton) {
        likeButton.innerText = buttonText;
    }
}

function addComment(productId) {
    const commentInput = document.getElementById(`comment-input-${productId}`);
    const commentsList = document.getElementById(`comments-${productId}`);

    const username = document.getElementById('username').value;

    if (commentInput.value.trim() !== '') {
        const comment = document.createElement('li');
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}`;
        const commentIndex = commentsList.children.length;
        comment.innerHTML = `<strong>${username}</strong>: ${commentInput.value} - ${time}
                             <button onclick="removeComment('${productId}', ${commentIndex})">Бриши</button>`;
        commentsList.appendChild(comment);
        commentInput.value = '';
    }
}

function removeComment(productId, commentIndex) {
    const commentsList = document.getElementById(`comments-${productId}`);
    commentsList.removeChild(commentsList.childNodes[commentIndex]);
}

const submitSurveyForm = function (event) {
    event.preventDefault();
    clearSurveyFormInputs();
    showSurveyCompletionMessage();
};

