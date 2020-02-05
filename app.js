const table = document.querySelector("table");
const navbar = document.querySelector("nav");

const COMPANIESURL = "https://acme-users-api-rev.herokuapp.com/api/companies";
const PRODUCTSURL = "https://acme-users-api-rev.herokuapp.com/api/products";

let companies = axios.get(COMPANIESURL);
let products = axios.get(PRODUCTSURL);

let results = Promise.all([companies, products]).then(res => {
  return {
    companies: res[0].data,
    products: res[1].data
  };
});
results.then(data => {
  renderNav(data)
  // renderTable(data);
});

const renderNav = ({ companies, products }) => {
  const html = `
    <li class='nav-link'>
        <a></a>
    </li>
  `
};

// const {companies, products} = results;
// console.log(companies)
// navbar.innerHTML = table
// let html = prods
//   .map(prod => {
//     return `
//         <thead>
//             <tr>
//                 <th>ID</th>
//             </tr>
//         </thead>
//     `;
//   })
//   .join("");
// table.innerHTML = html;
