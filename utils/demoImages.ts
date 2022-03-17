const images = [
  require('public/images/demo-image/advice-generator.png').default,
  require('public/images/demo-image/order-summary-component.png').default,
  require('public/images/demo-image/profile-card-component.png').default,
  require('public/images/demo-image/sunnyside-agency-landing-page.png').default,
];

const demoImages = images.map(image => {
  return Object.assign(image, {});
});

export default demoImages as StaticImageData[];
