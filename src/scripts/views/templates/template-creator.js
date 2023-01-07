import CONFIG from '../../globals/config';

const createRestDetailTemplate = (Rest) => `
<div class="movie-item" style="margin-top:7%; margin-bottom:4%;">
<div class="movie-item__header">
  <img class="movie-item__header__poster" alt="${Rest.name}"
      <source type="image/webp" srcset=${CONFIG.BASE_IMAGE_URL}${Rest.pictureId}>
    <div class="movie-item__header__rating">
  </div>
</div>
<div class="movie-item__content">
  <h3 style="font-size:30px;">${Rest.name}</h3>
  <p>⭐️ ${Rest.rating}</p>
  <p>📍${Rest.city} | ${Rest.address}</p>

  <div>
  <span>Kategori : ${Rest.categories[0].name}</span>
  ${
  Rest.categories.length > 1
    ? `<span>${Rest.categories[1].name}</span>`
    : ''
}
</div>
  <p style = "margin-top:3%;">${Rest.description}</p>
    <div class ="listmenu">
    <div>
    <p>FOOD</p>
    <ul>
      <p>${Rest.menus.foods[0].name}</p>
      <p>${Rest.menus.foods[1].name}</p>
      <p>${Rest.menus.foods[2].name}</p>
    </ul>
    </div>
    <div>
    <p>DRINKS</p>
    <ul>
      <p>${Rest.menus.drinks[0].name}</p>
      <p>${Rest.menus.drinks[1].name}</p>
      <p>${Rest.menus.drinks[2].name}</p>
    </ol>
  </div>
  </div>
  <p style="margin-top:4%; margin-bottom:2%;">-------------------------------------</p>
  <h3 class="title-review">Reviews</h3>
  <div class="detail-review">
  ${Rest.customerReviews
    .map(
      (review) => `
        <div class="detail-review-item">
          <div class="review-header">
            <p class="review-name">${review.name}</p>
            <p class="review-date">${review.date}</p>
          </div>
          <div class="review-body">
            ${review.review}
          </div>
        </div>
      `,
    )
    .join('')}
  </div>
  </div>
</div>
`;

const createRestItemTemplate = (Rest) => `
<div class="movie-item">
<div class="movie-item__header">
  <img class="movie-item__header__posters" alt="${Rest.city}"
      <source type="image/webp" srcset=${CONFIG.BASE_IMAGE_URL}${Rest.pictureId}>
    <div class="movie-item__header__rating">
  </div>
  <p style="font-size:17px;">📍${Rest.city} | ⭐️${Rest.rating}</p>
</div>
<div class="movie-item__content">
  <h3><a class="movietxt" href="/#/detail/${Rest.id}">${Rest.name}</a></h3>
  <p>${Rest.description}</p>
</div>
</div>
`; const createLikeDishButtonTemplate = () => `
<button aria-label="Favorite this dish" id="likeButton" class="like">
  <i class="fa fa-heart-o"  aria-hidden="true"></i>
</button>
`;

const createUnlikeDishButtonTemplate = () => `
<button aria-label="Unfavourite this dish" id="likeButton" class="like">
  <i class="fa fa-heart"  aria-hidden="true"></i>
</button>
`;

export {
  createRestItemTemplate, createRestDetailTemplate, createLikeDishButtonTemplate,
  createUnlikeDishButtonTemplate,
};
