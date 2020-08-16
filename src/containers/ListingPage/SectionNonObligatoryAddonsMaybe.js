import React, { useState } from 'react';
// import { FormattedMessage } from '../../util/reactIntl';
// import { PropertyGroup } from '../../components';

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import { Button, FieldCheckboxGroup, Form } from '../../components';
// import { Form } from 'react-bootstrap';

import css from './ListingPage.css';

const SectionNonObligatoryAddonsMaybe = props => {
    const { publicData } = props;

    const [nonObliTotalPrice, setNonObliTotalPrice] = useState(0);
    // this is to check whether the boat has related products

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

    // function calcAddonPrice(index, checked){

    // }
    // var options=[{key: "skippers", label: "Skippers"},{key: "sample", label: "Sample"},{key: "rua", label: "Rua"},{key: "duang", label: "Duang"}];
    return (
        <div className={css.sectionFeatures}>
            <h2 className={css.featuresTitle}>
                New non-obligatory addon component
            </h2>
            <p>current price : {nonObliTotalPrice}</p>

            {/* <form>
                <ToggleButtonGroup type='checkbox' name='genre'>
                    <ToggleButton value={'hip_hop'}>WIFI 10 GB: 30EUR /per week</ToggleButton>
                    <ToggleButton value={'jazz'}>Safety net: 50EUR /per week</ToggleButton>
                    <ToggleButton value={'country'}>Safety net: 50EUR /per week</ToggleButton>
                    <ToggleButton value={'country'}>Safety net: 50EUR /per week</ToggleButton>
                    <ToggleButton value={'country'}>Safety net: 50EUR /per week</ToggleButton>
                </ToggleButtonGroup>
            </form> */}
            {/* have to come up with a way to do the calculation correctly, i'm currently stuck, if nothing, I'll be subjected to humiliation tmr
            also, came to the realization that I'm not creating any sort of value in terms of programming, but my demo to the Indian and comm team seem
            to be working. */}
            <div>
                <form>
                    <ToggleButtonGroup type='checkbox' name='genre'>
                        {non_obligatory_addons.map((product, index) => {
                            return <ToggleButton value={product} onChange={() => setNonObliTotalPrice(nonObliTotalPrice + product.price)}>{product.name + " " + product.price.toString() + "EUR /" + product.unit}</ToggleButton>
                        })}
                    </ToggleButtonGroup>
                </form>
            </div>
            
        </div>
    );
};

export default SectionNonObligatoryAddonsMaybe;
