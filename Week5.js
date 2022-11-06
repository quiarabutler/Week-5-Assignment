class Products {
    constructor(name,type) {
        this.name = name;
        this.type = type;

    }

    describe() {
        return `${this.name} has ${this.type},`;
    }
}

class Brands {
    constructor(name) {
        this.name = name;
        this.products = []
    }

    addProducts(product) {
        if ( product instanceof Products) {
            this.products.push(product);
        
        } else {
            throw new Error (`Error ${product}`)
        }
    }
    describe () {
        return `${this.name} has ${this.products.length} products.`
    }
}    

class Menu {
    constructor() {
        this.brands = [];
        this.selectedbrand = null;
     }
    
     start() {
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
           switch(selection) {
            case '1' :
              this.addBrand();
              break;
            case '2':
              this.viewBrand();
              break;
            case '3' :
              this.deleteBrand();
              break;
            case '4':
              this.displayBrands();
              break;
            default:
                selection = 0;
           } 
           selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
     }
     showMainMenuOptions () {
        return prompt (`
        0) Exit
        1) Add a new Brand 
        2) View a Brand
        3) Delete a Brand
        4) Display all Brands
        `);
     }

     showBrandMenuOptions(brandInfo) {
        return prompt (`
        0) Back
        1) Add a product
        2) Delete a product
        --------------------
         ${brandInfo}
        `)
     }

     displayBrands() {
        let brandString = '';
        for(let i = 0; i < this.brands.length; i++) {
            brandString += i + ') ' + this.brands[i].name + '\n';
        }
        alert(brandString);
      }

      addBrand() {
        let name = prompt ('Enter name of Brand:');
        this.brands.push(new Brands(name));
      }

      viewBrand() {
        let index = prompt('Enter the index of the Brand you wish to view:')
        if (index > -1 && index < this.brands.length) {
            this.selectedbrand = this.brands[index];
            let description = 'BrandName:' + this.selectedbrand.name + '\n';

            for (let i = 0; i < this.selectedbrand.products.length, i++;) {
              description += i + ') ' + this.selectedbrand.products[i].name 
              + ' - ' + this.selectedbrand.products[i].type + '\n';
            }
            let selection = this.showBrandMenuOptions(description);
            switch(selection) {
                case '1': 
                    this.addProducts();
                break;
                case '2':
                    this.deleteProduct();
            }
        }
      }

      deleteBrand() {
        let index = prompt('Enter the index of the Brand you wish to delete:')
        if (index > - 1 && index < this.brands.length) {
            this.brands.splice(index, 1);
        }
      }

      addProducts() {
        let name = prompt('Enter name of new product:');
        let type = prompt('Enter type of product:')
        this.selectedbrand.products.push(new Products(name,type));
      }

      deleteProduct() {
        let index = prompt('Enter the index of the product you wish to delete:');
        if(index > - 1 && index < this.selectedbrand.products.length) {
            this.selectedbrand.products.splice(index, 1);
        }
      }

 } 
 
 let menu = new Menu();
menu.start();
