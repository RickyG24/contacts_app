import './App.css';
import React, {useState, useEffect} from 'react';

import SearchBar from './SearchBar';

const filterContacts = (contacts, query) => {
    if (!query) {
        return contacts;
    }

    return contacts.filter((contact) => {
        const contactName = contact.name.toLowerCase();
        const contactPhone = contact.phone;
        const contactEmail = contact.email.toLowerCase();
        return contactName.includes(query.toLowerCase()) || 
        contactPhone.includes(query) || contactEmail.includes(query.toLowerCase());
    });
};


function MyComponent() {
    const [items, setItems] = useState([]);
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredContacts = filterContacts(items, searchQuery);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
            setItems(result);
            },

        )
    }, [])
    
    return (
    <div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <ul>
            {filteredContacts.map(item => (
            <li key={item.name}>
                <div class="card">
                <div>
                    <h5 
                        class="card-title">{item.name}
                    </h5>
                    <h6 
                        class="card-subtitle mb-2">{item.email}
                    </h6>
                    <p 
                        class="card-text">{item.phone}
                    </p>
                </div>
                </div>
            </li>
            ))}
        </ul>
    </div>
    );
}

  
export default MyComponent;
