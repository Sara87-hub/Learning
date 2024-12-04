// Create Element
const li = document.createElement('li');

       // Add Class
li.className = 'collection-item';

       // Add Id
li.id = 'new-item';

      // Add Attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

   // Create new lnk element
const link = document.createElement('a');
   // Add Classes
link.className = 'delete-item secondary-content';
   // Add icon HTML
link.innerHTML - '<i class="fa fa-remove"></i>';
   // Append link to li
li.appendChild(link);

   // Append li as Child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);