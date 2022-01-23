import React from "react";

function Contact(){
    return(
        <div>
            <h1>Here are my contact details</h1>
            <table style={{textAlign:"left"}}>
                <tbody>
                    <tr>
                        <th>Phone:</th>
                        <td>123456789</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>abc@gmail.com</td>
                    </tr>
                    <tr>
                        <th>GitHub:</th>
                        <td>ranvijay198@git</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Contact;