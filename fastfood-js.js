var sum = 0;
class Goods {
	constructor(title, price, kkal) {
		this.title = title;
        this.price = price;
        this.kkal = kkal;
	}
	appendToCatalog () {
        let selectSize =  document.createElement('input');
        selectSize.name = 'size';
        selectSize.type = 'radio';
        selectSize.value = this.kkal;
        selectSize.className = 'selectSize';

        let size =  document.createElement('p');
        size.classList.add('select');
        size.innerHTML = this.title;

        let price =  document.createElement('p');
        price.classList.add('select');
        price.innerHTML = this.price;

        let currency =  document.createElement('p');
        currency.classList.add('select');
        currency.innerText = ' руб.';

        document.querySelector("#size").appendChild(selectSize);
	    document.querySelector("#size").appendChild(size);
        document.querySelector("#size").appendChild(price);
        document.querySelector("#size").appendChild(currency);
    }
    appendToIngridiets () {
        let selectIngridient =  document.createElement('input');
        selectIngridient.name = 'ingridient';
        selectIngridient.type = 'checkbox';
        selectIngridient.value = this.kkal;
        selectIngridient.className = 'selectIngridient';

        let ingridient =  document.createElement('p');
        ingridient.classList.add('select');
        ingridient.innerHTML = this.title;

        let price =  document.createElement('p');
        price.classList.add('select');
        price.innerHTML = this.price;

        let currency =  document.createElement('p');
        currency.classList.add('select');
        currency.innerText = ' руб.';

        document.querySelector("#ingridients").appendChild(selectIngridient);
        document.querySelector("#ingridients").appendChild(ingridient);
        document.querySelector("#ingridients").appendChild(price);
        document.querySelector("#ingridients").appendChild(currency);
    }
    appendToMore () {
        let selectMore =  document.createElement('input');
        selectMore.name = 'more';
        selectMore.type = 'checkbox';
        selectMore.value = this.kkal;
        selectMore.className = 'selectMore';

        let more =  document.createElement('p');
        more.classList.add('select');
        more.innerHTML = this.title;

        let price =  document.createElement('p');
        price.classList.add('select');
        price.innerHTML = this.price;

        let currency =  document.createElement('p');
        currency.classList.add('select');
        currency.innerText = ' руб.';

        document.querySelector("#more").appendChild(selectMore);
        document.querySelector("#more").appendChild(more);
        document.querySelector("#more").appendChild(price);
        document.querySelector("#more").appendChild(currency);
    }
};

const good1 = new Goods ('Маленький бургер', '50', "20");
const good2 = new Goods ('Большой бургер', '100', "40");

const good3 = new Goods ("с сыром", '10', '20');
const good4 = new Goods ("с салатом", '20', '5');
const good5 = new Goods ("с картофелем", '15', '10');

const good6 = new Goods ("и немного приправы..", '15', '0');
const good7 = new Goods ("и немного майонеза..", '20', '5');

good1.appendToCatalog();
good2.appendToCatalog();
good3.appendToIngridiets();
good4.appendToIngridiets();
good5.appendToIngridiets();
good6.appendToMore();
good7.appendToMore();


var sumArr = [0, 0, 0, 0, 0, 0];
var kkalArr = [0, 0, 0, 0, 0, 0];
var quantity = document.createElement('p');
var kkalories = document.createElement('p');
document.querySelector("#quantity").appendChild(quantity);
document.querySelector("#quantity").appendChild(kkalories);

var checkBasket = function (evt) {
    if (evt.target.className == 'selectSize') {
        if (document.querySelector("#size").children[0].checked == true) {
            document.querySelector("#sizeBurger").innerText = document.querySelector("#size").children[1].innerText;

            sumArr[0] = parseInt(document.querySelector("#size").children[2].innerText);
            kkalArr[0] = parseInt(document.querySelector("#size").children[0].value);
        }
        if (document.querySelector("#size").children[4].checked == true) {
            document.querySelector("#sizeBurger").innerText = document.querySelector("#size").children[1].innerText;

            sumArr[0] = parseInt(document.querySelector("#size").children[6].innerText);
            kkalArr[0] = parseInt(document.querySelector("#size").children[4].value);
        }
        checkQuantity ();
    }

    if (evt.target.className == 'selectIngridient') {
        if (document.querySelector("#ingridients").children[0].checked == true) {
            document.querySelector("#ingBurger").innerText = document.querySelector("#ingridients").children[1].innerText;
            sumArr[1] = parseInt(document.querySelector("#ingridients").children[2].innerText);
            kkalArr[1] = parseInt(document.querySelector("#ingridients").children[0].value);
        } else {
            sumArr[1] = 0;
            kkalArr[1] = 0;
        }
        if (document.querySelector("#ingridients").children[4].checked == true) {
            document.querySelector("#ingBurger").innerText = document.querySelector("#ingridients").children[1].innerText;
            sumArr[2] = parseInt(document.querySelector("#ingridients").children[6].innerText);
            kkalArr[2] = parseInt(document.querySelector("#ingridients").children[4].value);
        } else {
            sumArr[2] = 0;
            kkalArr[2] = 0;
        }
        if (document.querySelector("#ingridients").children[8].checked == true) {
            document.querySelector("#ingBurger").innerText = document.querySelector("#ingridients").children[1].innerText;
            sumArr[3] = parseInt(document.querySelector("#ingridients").children[10].innerText);
            kkalArr[3] = parseInt(document.querySelector("#ingridients").children[8].value);
        } else {
            sumArr[3] = 0;
            kkalArr[3] = 0;
        }
        checkQuantity ();
    }

    if (evt.target.className == 'selectMore') {
        if (document.querySelector("#more").children[0].checked == true) {
            document.querySelector("#moreBurger").innerText = document.querySelector("#more").children[1].innerText;
            sumArr[4] = parseInt(document.querySelector("#more").children[2].innerText);
            kkalArr[4] = parseInt(document.querySelector("#more").children[0].value);
        } else {
            sumArr[4] = 0;
            kkalArr[4] = 0;
        }
        if (document.querySelector("#more").children[4].checked == true) {
            document.querySelector("#moreBurger").innerText = document.querySelector("#more").children[1].innerText;
            sumArr[5] = parseInt(document.querySelector("#more").children[6].innerText);
            kkalArr[5] = parseInt(document.querySelector("#more").children[4].value);
        } else {
            sumArr[5] = 0;
            kkalArr[5] = 0;
        }
        checkQuantity ();
    }

}


function checkQuantity () {
    quantity.innerText = sumArr[0] + sumArr[1] + sumArr[2] + sumArr[3] + sumArr[4] + sumArr[5] + ' рублей';
    kkalories.innerText = (kkalArr[0] + kkalArr[1] + kkalArr[2] + kkalArr[3] + kkalArr[4] + kkalArr[5]) + ' ккал';
}



document.addEventListener('click', checkBasket);