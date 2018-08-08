import React from 'react';
import { connect } from 'react-redux';

export class SearchCriteria extends React.Component {
    render() {
        return (
            <div className="search-criteria">
                <form>
                <fieldset>
                    <legend>Shaken or Stirred</legend>
                    <div>
                        <input type="checkbox" id="shaken" name="feature"
                            value="shaken" />
                        <label htmlFor="shaken">Shaken</label>
                        <input type="checkbox" id="stirred" name="feature"
                            value="stirred" />
                        <label htmlFor="stirred">Stirred</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Egg White</legend>
                    <div>
                        <input type="checkbox" id="yes" name="feature"
                            value="yes" />
                        <label htmlFor="yes">Yes</label>
                        <input type="checkbox" id="no" name="feature"
                            value="no" />
                        <label htmlFor="no">No</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Spirit</legend>
                    <div>
                        <input type="checkbox" id="whiskey" name="feature"
                            value="whiskey" />
                        <label htmlFor="whiskey">Whiskey</label>
                        <input type="checkbox" id="tequila" name="feature"
                            value="tequila" />
                        <label htmlFor="tequila">Tequila</label>
                        <input type="checkbox" id="tequila" name="feature"
                            value="tequila" />
                        <label htmlFor="rum">Rum</label>
                        <input type="checkbox" id="gin" name="feature"
                            value="gin" />
                        <label htmlFor="gin">Gin</label>
                        <input type="checkbox" id="vodka" name="feature"
                            value="vodka" />
                        <label htmlFor="vodka">Vodka</label>
                    </div>
                    <div>
                        <input type="checkbox" id="whiskey" name="feature"
                            value="whiskey" />
                        <label htmlFor="whiskey">Rye Whiskey</label>
                        <input type="checkbox" id="whiskey" name="feature"
                            value="whiskey" />
                        <label htmlFor="whiskey">Scotch Whiskey</label>
                    </div>
                    <div>
                        <input type="checkbox" id="brandy" name="feature"
                            value="brandy" />
                        <label htmlFor="brandy">Brandy</label>
                        <input type="checkbox" id="sherry" name="feature"
                            value="sherry" />
                        <label htmlFor="sherry">Sherry</label>
                        <input type="checkbox" id="beer" name="feature"
                            value="beer" />
                        <label htmlFor="beer">Beer</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Juices</legend>
                    <div>
                        <input type="checkbox" id="lemon" name="feature"
                            value="lemon" />
                        <label htmlFor="lemon">Lemon</label>
                        <input type="checkbox" id="lime" name="feature"
                            value="lime" />
                        <label htmlFor="lime">Lime</label>
                        <input type="checkbox" id="grapefruit" name="feature"
                            value="grapefruit" />
                        <label htmlFor="grapefruit">Grapefruit</label>
                        <input type="checkbox" id="orange" name="feature"
                            value="orange" />
                        <label htmlFor="orange">Orange</label>
                    </div>
                    <div>
                        <input type="checkbox" id="pineapple" name="feature"
                            value="pineapple" />
                        <label htmlFor="pineapple">Pineapple</label>
                        <input type="checkbox" id="cranberry" name="feature"
                            value="cranberry" />
                        <label htmlFor="cranberry">Cranberry</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Syrups</legend>
                    <div>
                        <input type="checkbox" id="simple" name="feature"
                            value="simple" />
                        <label htmlFor="simple">Simple</label>
                        <input type="checkbox" id="honey" name="feature"
                            value="honey" />
                        <label htmlFor="honey">Honey</label>
                        <input type="checkbox" id="ginger" name="feature"
                            value="ginger" />
                        <label htmlFor="ginger">Ginger</label>
                        <input type="checkbox" id="cinnamon" name="feature"
                            value="cinnamon" />
                        <label htmlFor="cinnamon">Cinnamon</label>
                    </div>
                    <div>
                        <input type="checkbox" id="curacao" name="feature"
                            value="curacao" />
                        <label htmlFor="curacao">Curacao</label>
                        <input type="checkbox" id="maple" name="feature"
                            value="maple" />
                        <label htmlFor="maple">Maple</label>
                    </div>
                </fieldset>
                <button type="submit">Search!</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(SearchCriteria);