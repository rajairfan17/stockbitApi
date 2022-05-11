describe("Testing API Endpoints Using Cypress", () => {
    var id;
    it("Test POST Request", () => {
        cy.request({
             method: 'POST',
             url: 'https://petstore.swagger.io/v2/pet',
             body: {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "Raja",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
             }
        }).then((response) => { 
            expect(response.status).to.eq(200);
            expect(response.body).not.to.be.empty;
            expect(response.body).has.property("name","Raja"); 
            const respBody = response.body;
            id = respBody['id'];
            cy.log('response ',JSON.stringify(respBody));
        })
    })

    it("Test GET Request", () => {
        cy.request('GET','https://petstore.swagger.io/v2/pet/'+id)
             .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).not.to.be.empty;
        })
    })

    it("Test PUT Request", () => {
            cy.request({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/pet',
                body: {
                    "id": id,
                    "category": {
                    "id": 0,
                    "name": "string"
                    },
                    "name": "Raja Irfan",
                    "photoUrls": [
                    "string"
                    ],
                    "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                    ],
                    "status": "available"
                }
            }).then((response) => { 
                expect(response.status).to.eq(200);
                expect(response.body).not.to.be.empty;
                expect(response.body).has.property("name","Raja Irfan"); 
                const respBody = response.body;
                cy.log('response ',JSON.stringify(respBody));
            })
     })

    it("Test DELETE Request", () => {
        cy.request({
                  method : 'DELETE',
                  url: 'https://petstore.swagger.io/v2/pet/'+id
                  }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).not.to.be.empty;
                    const respBody = response.body;
                    cy.log('response ',JSON.stringify(respBody));
                })	
    })

})