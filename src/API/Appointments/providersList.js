import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Api implementation to get list of providers. For online appointment scheduling workflow.

const ProvidersList = () => {
    const [providerList, setProviderList] = useState();
    const [selectedProvider, setSelectedProvider] = useState();

    useEffect(() => {
        const authHeaders4 = {
            accept: 'application/json',
            Authorization: 'Bearer oCzAnMzTxaA71sZUaynz0m5w46CG',
        };

        axios
        .get(
            `https://api.preview.platform.athenahealth.com/v1/16555/providers?showallproviderids=true&providertype=MD&limit=10`,
            {
                headers: authHeaders4,
            }
        )

        .then(response => {
            setProviderList(response.data);
            console.log(response.data);
        })

        .catch(error => {
            console.error(error);
        });

    }, []);

    if (providerList === undefined) {
        return <div>Loading lists...</div>;
    }

    else {
        const handleProviderClick = (provider) => {
            setSelectedProvider(provider);
        }

        return (
          <div>
            <h2>List of Providers:</h2>
            <table>
                <thead>
                    <tr>
                     <th>Name</th>
                   </tr>
                </thead>
                <tbody>
                    {providerList.providers.map(provider => (
                        <tr key={provider.providerid}>
                            <td onClick={() => handleProviderClick(provider)} style={{cursor: 'pointer'}}>{provider.displayname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedProvider && (
                <div>
                    <h3>{selectedProvider.displayname}</h3>
                    <p>Specialty: {selectedProvider.specialty}</p>
                    <p>Provider ID: {selectedProvider.providerid}</p>
                    <p>Entity Type: {selectedProvider.entitytype}</p>
                    <p>Home Department: {selectedProvider.homedepartment}</p>
                    <p>Scheduling Name: {selectedProvider.schedulingname}</p>
                    <p>Provider Type: {selectedProvider.providertype}</p>
                    <p>Gender: {selectedProvider.sex}</p>
                    <p>Email Address: {selectedProvider.directaddress}</p>
                </div>
            )}
            </div>
        );
    }

};
export default ProvidersList;

            