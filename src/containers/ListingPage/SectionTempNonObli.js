
import React, { Component } from "react";
import CheckBox from "./CheckBox";
import css from './ListingPage.css';

// import { Button, FieldCheckboxGroup, Form } from '../../components';
export class SectionTempNonObli extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };

        this.calculateTotal = this.calculateTotal.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.props.onAddonSelection(e.target.value);
    }
    calculateTotal(input, checked) {
        let { total } = this.state;

        if (checked) {
            total += input;
        } else {
            total -= input;
        }

        this.setState({
            total
        });
    };


    render() {
        // var options = [{ key: "skippers", label: "Skippers" }, { key: "skappers", label: "Skappers" }, { key: "skeppers", label: "Skeppers" }];
        const { publicData } = this.props;
        if (!publicData || !('products' in publicData)) {
            return null;
        }
        // lesson learnt, retrieve the raw object first
        const productsArray = publicData && publicData.products ? publicData.products : [];
        console.log(productsArray);
        var toDisplayProduct = null;
        if (productsArray.length === 1) {
            // display the only product
            toDisplayProduct = productsArray[0];
        } else if (productsArray.length > 1) {
            // this part is where we determine which product do we choose to display when there is multiple products
            // by default bareboat always take precedence, then crewed, if both are absent, then we dun care and choose a random one to display
            let best_product_finder = new Map();
            for (var index = 0; index < productsArray.length; index++) {
                var cur_prd = productsArray[index];
                var cur_prd_name = cur_prd.name;
                // allPrdNames.push(cur_prd_name);
                best_product_finder.set(cur_prd_name, index);
            }
            console.log(best_product_finder);
            // bareboat is the most important one
            if (best_product_finder.has('Bareboat')) {
                // console.log('flag1');
                var bareboatIndex = best_product_finder.get("Bareboat");
                // console.log(bareboatIndex.toString());
                toDisplayProduct = productsArray[bareboatIndex];
            } else if (best_product_finder.has('Crewed')) {
                var crewedIndex = best_product_finder.get("Crewed");
                toDisplayProduct = productsArray[crewedIndex];
            } else {
                //there are additional 15 or more products that aren't the majority of the products, so just choose one randomly
                toDisplayProduct = productsArray[0];
            }


        }
        console.log(toDisplayProduct);
        console.log(toDisplayProduct.name);

        // var productName = toDisplayProduct.name;
        // Finally this section is working

        // how abt the following section? I'm finding so many troubles trying to concat string?
        // what's wrong with me?
        var extras = toDisplayProduct.extras;

        var non_obligatory_addons = [];

        // var nonObliString = "";
        for (var a = 0; a < extras.length; a++) {
            var cur_sub = extras[a];
            var temp_obli = cur_sub.obligatory;
            if (temp_obli === false) {
                non_obligatory_addons.push(cur_sub);
                // nonObliString = nonObliString + cur_sub.name + ": " + cur_sub.price.toString() + "EUR " + "/" + cur_sub.unit + "\n";
            }
            // tempString.concat(temp_name,temp_price.toString(),temp_unit,"....");
        }
        console.log(non_obligatory_addons);
        // const totalAddonPrice=this.props.addonPrice;
        return (
            <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        Please choose your choice of optional addons
      </h2>
            <div>
                
                    {non_obligatory_addons.map((product, index) => {
                        // return <ToggleButton value={product} onChange={() => setNonObliTotalPrice(nonObliTotalPrice + product.price)}>{product.name + " " + product.price.toString() + "EUR /" + product.unit}</ToggleButton>
                        return <CheckBox calculateTotal={this.calculateTotal} value={product.price} nameString={product.name + " " + product.price.toString() + "EUR /" + product.unit}/>
                    })}
                    {/* <CheckBox calculateTotal={this.calculateTotal} value={10} />
                    <CheckBox calculateTotal={this.calculateTotal} value={20} />
                    <CheckBox calculateTotal={this.calculateTotal} value={30} />
                    <CheckBox calculateTotal={this.calculateTotal} value={40} /> */} 
                    <p>Price of your selected addons: {this.state.total}</p>
                    <br/>
            </div>

                    </div>

        );
    }
}
export default SectionTempNonObli;