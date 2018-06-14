export class HtmlTextGenerator{
    public static generatePersonInfoHTML(person){
        return  `
          <img class="info-pic" src='${person.pic}'><br /><br />
          <p><b>Birthday : </b> ${person.birth_year} <br />
          <b>Gender : </b> ${person.gender} <br />
          <b>Mass : </b> ${person.mass} <br />
          <b>Height : </b> ${person.height} <br />
          <b>Hair Color : </b> ${person.hair_color} <br />
          <b>Eye Color : </b> ${person.eye_color} <br />`
    }   
    
    public static generateFinalGameModalHTML(points){
        return `
          <b>You did: </b>${points} points.<br /><br />
          <input  placeholder="Name" type="text" class="form-control"><br />
          <input  placeholder="Email" type="text" class="form-control"><br />
          <button class="btn btn-success">Send to Ranking</button>
          <a href="http://localhost:4200" class="btn btn-primary">Back to Homepage</a>
        `
    }
}