import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
  </head>
  <footer>
  <div class="info">
  <br>
    <p class="Dev">Developed By Armando Espinoza</p>


    
    <a href="https://github.com/ArmandoEspinoza" target="_blank">Github</a>  | <a href="https://www.behance.net/armyespinoza" target="_blank">Behance</a> | <a href="https://www.linkedin.com/in/mario-armando-robles-espinoza/" target="_blank">LinkedIn</a>

    
    
   
   
  </div>
</footer> 
`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}