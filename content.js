/******** prototype functions to set elements display to none ***********/
Element.prototype.hide = function() {
    this.style.display = 'none';
}

NodeList.prototype.hide = HTMLCollection.prototype.hide = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i]) {
            this[i].style.display = 'none';
        }
    }
}

/******** capturing each element of newtab that we want to hide ********/
var header = document.getElementById('mngb');
if(header) header.hide();
var googleLogo = document.getElementById('lga');
if(googleLogo) googleLogo.hide();
var searchForm = document.getElementById('f');
if(searchForm) searchForm.hide();
var mostVisited = document.getElementById('most-visited');
if(mostVisited) mostVisited.hide();