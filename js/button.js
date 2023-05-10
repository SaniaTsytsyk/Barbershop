// window.addEventListener('scroll', function () {
//    var scroll = document.querySelector('.upward')
//    scroll.classList.toggle("active", window.scrollY > 500)
// })
// function scrollTopTop() {
//    window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//    })
// }
const btnUp = {
   el: document.querySelector('.btn-up'),
   show() {
      this.el.classList.remove('btn-up_hide');
   },
   hide() {
      this.el.classList.add('btn-up_hide');
   },
   addEventListener() {
      window.addEventListener('scroll', () => {
         const scrollY = window.scrollY || document.documentElement.scrollTop;
         scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
         });
      }
   }
}
btnUp.addEventListener();