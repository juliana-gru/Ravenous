const apiKey = 'NAIFFIxD5zyMDzWePkX52tgjh_3If9quZeENNJ74s8bfb85YROvgtDdkCr7-o-1dvdrhAV8rp1hJzEJNsi8eDDGvBYY48r81_N8QPKXnQt9qJ6EKGULJ6peFwkjxXnYx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                const businesses = jsonResponse.businesses.map( business => {
                    return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count
                    }                   
                })
                return businesses;
            }              
        });
    }
};

export default Yelp;