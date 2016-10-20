//Check if share API is supported or not
if(navigator.share !== undefined) {
  document.addEventListener('DOMContentLoaded', function() {
    var shareBtn = document.querySelector('.share');
    shareBtn.addEventListener('click', function(event) {
      navigator.share({
        title: document.title,
        text: 'Try this new version of Healthkart... I am not able to figure out whether its an app of a website!!',
        url: window.location.href
      })
      .then(function() {
        console.info('Shared successfully.');
      })
      .catch(function (error) {
        console.error('Error in sharing: ', error);
      })
    });
  });
}
