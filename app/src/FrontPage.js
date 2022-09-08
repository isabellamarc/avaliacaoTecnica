import React from 'react';

export default class FrontPage extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
        };
    }

    balancedSupport = () => {
        const { value } = this.state;
        for (let result of value ) {
            if (result === ']' || result === '}' || result === ')') {
                return result = -1;
            }
            if ( result === '[' || result === '{' || result === '(') {
                return result += 1;
            }
            return result;
        }

    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h1>Welcome!</h1>
                <div>
                    <h2>Search your contacts!</h2>
                    
                </div>


                <div>
                <h2>Check if your text has a valid number of parentheses and brackets!</h2>
                <p>
                    <input
                        type="text"
                        placeholder="Insert your text here"
                        id="value"
                        value={ value }
                    />
                </p>
                </div>
            </div>
        )
    }
}