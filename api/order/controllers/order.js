"use strict";

// const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    async create(ctx) {
        const {
            idUser,
            metodoDePago,
            addressShipping,
            // products,
            totalPayment,
            productsTotal,
            priceShipping,
        } = ctx.request.body;
        const createOrder = [];
        const data = {
            // products,
            user: idUser,
            totalPayment,
            addressShipping,
            metodoDePago,
            productsTotal,
            priceShipping,
        };
        const validData = await strapi.entityValidator.validateEntityCreation(
            strapi.models.order,
            data
        );
        // entity = await service.create(data);
        const entry = await strapi.query("order").create(validData);
        createOrder.push(entry);
        JSON.stringify(entry);
        console.log(entry);

        const capturarPrecioConDescuento = (discount, price) => {

            let precioTotalDescuento = 0
            if (discount) {
                precioTotalDescuento = (price - (price * discount) / 100)
                return precioTotalDescuento
            } else {
                return price
            }


        }
        const contentHTML = `<html>
    
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<style type="text/css">
/* CLIENT-SPECIFIC STYLES */
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { -ms-interpolation-mode: bicubic; }
/* RESET STYLES */
img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
table { border-collapse: collapse !important; }
body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
/* iOS BLUE LINKS */
a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}
/* MEDIA QUERIES */
@media screen and (max-width: 480px) {
    .mobile-hide {
        display: none !important;
    }
    .mobile-center {
        text-align: center !important;
    }
}
div[style*="margin: 16px 0;"] { margin: 0 !important; }
</style>
</head>
<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
Pedido de build brain
</div>
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
            <tr>
                <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#044767">
              
                <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                        <tr>
                            <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;" class="mobile-center">
                                <h1 style="font-size: 36px; font-weight: 800; margin: 0; color: #ffffff;">Tienda</h1>
                            </td>
                        </tr>
                    </table>
                </div>
             
                <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;" class="mobile-hide">
                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                        <tr>
                            <td align="right" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                <table cellspacing="0" cellpadding="0" border="0" align="right">
                                
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
           
                </td>
            </tr>
            <tr>
                <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
            
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                    <tr>
                    
                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                        <img src="https://litmus-builder.s3.amazonaws.com/01f7f4fc-e5c6-4849-a444-70921cdc262e" width="125" height="120" style="display: block; border: 0px;" /><br>
                        <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                           Gracias por tu Orden!
                        </h2>
                    </td>
                    
                   
                    <tr>
                        <td align="left" style="padding-top: 20px;">
                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                <td width="50%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                Orden
                            </td>
                            <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                        cantidad
                                    </td>
                                    <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                        Valor
                                    </td>
                                    <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                    Total
                                </td>
                                </tr>
                                ${productsTotal
                .map(
                    (i) =>
                        '<tr><td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">' +
                            i.title +
                            '</td><td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">' +
                            i.quantity +
                            '</td><td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">L ' +
                            capturarPrecioConDescuento(i.discount, i.price) +
                            '</td><td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">L ' +
                            capturarPrecioConDescuento(i.discount, i.price) * i.quantity +
                        "</td></tr>"
                )
                .join(" ")}
                             
                          
                            </table>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td align="left" style="padding-top: 20px;">
                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                Envio
                            </td>
                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                            L   ${priceShipping}
                            
                            </td>
                        </tr>
                        <tr>
                        <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                            TOTAL
                        </td>
                        <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                            L ${totalPayment}  
                        </td>
                    </tr>
                                
                            </table>
                        </td>
                    </tr>
                </table>
             
                
                </td>
            </tr>
            
             <tr>
                 
                <td align="center" height="100%" valign="top" width="100%" style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">
                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                        <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                        Datos de cliente
                        </h2>
                        Metodo de pago: ${metodoDePago == 1
                ? "Tranferencia Bancaria"
                : "Efectivo"
            }
                        <br>
                        Total de envio :${priceShipping}
                    </td>
<br>
                    <tr>
                     
                        <td align="center" valign="top" style="font-size:0;">
                           
                            <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                    <tr>
                                        <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                            <p style="font-weight: 800;">Datos de la ubicación</p>
                                            <p>Lugar: ${addressShipping.address
            }<br>
                                            Ciudad: ${addressShipping.city}
                                            <br>
                                            Pais:
                                            ${addressShipping.Contry}
                                            </p>
                                            
                                        </td>
                                    </tr>
                                </table>
                            </div>
                          
                            <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                    <tr>
                                        <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                            <p style="font-weight: 800;">Datos de contacto del cliente</p>
                                            <p>Nombre:  ${addressShipping.lastName
            }<br> 
                                           Telefono: ${addressShipping.Telefono
            }<br>${entry.user.email}</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                           
                        </td>
                    </tr>
                </table>
       
                </td>
            </tr>
        
            <tr>
                <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
               
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                   
                   
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
                </td>
            </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
        </td>
    </tr>
</table>
    <!-- LITMUS ATTRIBUTION -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#ffffff" align="center">
    
            </td>
        </tr>
    <a href="https://wa.me/50487405715?TEXT=mi numero de orden es: ${entry._id}">Contactar con el equipo encargado de tu pedido</a>
    </table>
</body>
</html>`;

        const emailOptionsCliente = {
            to: entry.user.email,
            subject: "Recibimos tu Orden  ",


            html: contentHTML,
        };

        const emailOptions = {
            to: "m.elvin@live.com",

            subject: "Nueva Pedido ",
            html: contentHTML,
        };
        await strapi.plugins["email"].services.email.send(emailOptionsCliente);

        setTimeout(async function () {
            await strapi.plugins["email"].services.email.send(emailOptions);
        }, 3000);

        // strapi.log.debug(`Email sent to ${sendTo}`)
        // ctx.send({ message: 'Email sent' })

        return entry;
        //
        // JSON.parse(entry)

        // return sanitizeEntity(entry, { model: strapi.models.order });
    },
};

// const { default: createStrapi } = require("strapi");

// const stripe = require("stripe")(
//   "sk_test_51IXy7zHRR4uNKn8B0wBTQyhEVvpVlIuG4tRG40U5u1UmovQcg1XAKEytQDLEr3nKhSQnMaId8LydVDMRziaFLOqs00DZlzKcjp"
// );

// /**
//  * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
//  * to customize this controller
//  */

// module.exports = {
//   async create(ctx) {
//     // const { tokenStripe, products, idUser, addressShipping } = ctx.request.body;
//     const {  products, idUser, addressShipping,metodoDePago ,productsTotal} = ctx.request.body;

//     // console.log(ctx.request.body);
//     let totalPayment = 0;
//     products.forEach((product) => {
//       totalPayment += product.price * product.quantity;
//     });
//     // const charge = await stripe.charges.create({
//     //   amount: totalPayment * 100,
//     //   currency: "hnl",
//     //   source: tokenStripe,
//     //   description: `ID Usuario: ${idUser}`,
//     // });

//     const createOrder = [];
//     // for await (const product of products) {

//       const data = {
//         productsTotal,
//         // product: product.id,
//         user: idUser,
//         metodoDePago,
//         // totalPayment: totalPayment,
//         // productsPayment: product.price * product.quantity,
//         // quantity: product.quantity,
//         // idPayment: charge.id,
//         // addressShipping,
//       };

//       const validData = await strapi.entityValidator.validateEntityCreation(
//         strapi.models.order,
//         data
//       );
//       const entry = await strapi.query("order").create(validData);
//       createOrder.push(entry);
//     // }

//     return null;
//   },
// };