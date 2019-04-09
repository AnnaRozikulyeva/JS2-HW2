var sum = 0;
class Goods {
	constructor(img, title, price) {
		this.image = img;
		this.title = title;
		this.price = price;
	}
	appendTo () {
		let newDiv = document.createElement('div');
        newDiv.classList.add('goods-item');

        let newA =  document.createElement('a');
        newDiv.appendChild(newA);

        let image = document.createElement('img');
        image.src = this.image;
        newA.appendChild(image);

        let name = document.createElement('h3');
        name.innerText = this.title;
        newA.appendChild(name);

        let prices = document.createElement('p');
        prices.innerText = this.price;
        newA.appendChild(prices);

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.innerText = 'Купить';
        newA.appendChild(buyBtn);

        document.querySelector("#catalog").appendChild(newDiv);

        sum += parseInt(this.price);
        console.log(sum); // сумма всех товаров в каталоге
    }
};

const good1 = new Goods ("xiaomi.png", 'Xiaomi Redmi Note 5', '15000');
const good2 = new Goods ("xiaomi.png", 'Xiaomi Redmi 5', '14000');
const good3 = new Goods ("xiaomi.png", 'Xiaomi Redmi 4A', '11000');
const good4 = new Goods ("xiaomi.png", 'Xiaomi MiMix 8', '30000');
const good5 = new Goods ("xiaomi.png", 'Xiaomi Redmi 6', '20000');
const good6 = new Goods ("xiaomi.png", 'Xiaomi Redmi 6A', '15000');
const good7 = new Goods ("xiaomi.png", 'Xiaomi Redmi Note 4', '10000');
const good8 = new Goods ("xiaomi.png", 'Xiaomi Redmi 5A', '12000');
good1.appendTo();
good2.appendTo();
good3.appendTo();
good4.appendTo();
good5.appendTo();
good6.appendTo();
good7.appendTo();
good8.appendTo();

