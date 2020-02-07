function ourJq(params) {
     this.elements = params
     this.on = function (elventName, callBackFn) {
          for (let i = 0; i < this.elements.length; i++) {
               const element = this.elements[i];
               element.addEventListener(elventName, callBackFn)

          }
     }
     this.html = function (newHTML) {
          if (typeof newHTML == 'string') {
               for (let i = 0; i < this.elements.length; i++) {
                    const element = this.elements[i];
                    element.innerHTML = newHTML
               }
          } else if (newHTML === undefined || newHTML === null) {
               return this.elements[0].innerHTML

          }
     }

     this.css = function (styleName, value) {
          this.elements[0].parentNode.style.listStyle = 'none';
          if (typeof styleName == 'string' && (typeof value == 'string' || typeof value == 'number')) {
               for (let i = 0; i < this.elements.length; i++) {
                    this.elements[i].style = `${styleName} : ${value}`
                    element.parentNode.style = 'list-style:none;text-align:center;'
               }
          } else if (typeof styleName == 'object' && Array.isArray(styleName) == false) {
               for (let i = 0; i < this.elements.length; i++) {
                    const element = this.elements[i];
                    for (const key in styleName) {
                         element.style[key] = styleName[key];
                    }
               }
          }
     }
     this.hasClass = function (text) {
          if (typeof text == 'string') {
               for (let i = 0; i < this.elements.length; i++) {
                  if(this.elements[i].classList.contains(text))
                    return true
               }
          }
          return false
     }

     this.addClass = function (text) {
          if (typeof text == 'string') {
               for (let i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].classList.add(text))
                         return true
               }
          }
          return false
     }

     this.removeClass = function (text) {
          if (typeof text == 'string') {
               for (let i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].classList.remove(text))
                         return true
               }
          }
          return false
     }
}

function $(selectors) {
     var elements;
     if (typeof selectors === 'string') {
          elements = document.querySelectorAll(selectors)
     } else if (selectors instanceof HTMLElement) {
          elements = [selectors]
     }
     else {
          elements = null
     }
     var newObjectOurJq = new ourJq(elements)
     return newObjectOurJq
}