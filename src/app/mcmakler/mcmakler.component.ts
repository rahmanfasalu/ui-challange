import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-mcmakler',
  templateUrl: './mcmakler.component.html',
  styleUrls: ['./mcmakler.component.scss']
})
export class McmaklerComponent implements OnInit {

  toggleItem = '';
  data = [];
  constructor() { }

  ngOnInit() {
    this.data = [  
      {  
         "title":"Image",
         "checked":false,
         "link":"#",
         "icon":"fa-folder",
         "childrens":[  
            {  
               "title":"Image1",
               "checked":false,
               "link":"#",
               "icon":"fa-picture-o",
               "disable":false
            },
            {  
               "title":"Image2",
               "checked":false,
               "link":"#",
               "icon":"fa-picture-o",
               "disable":false
            },
            {  
               "title":"Image3",
               "checked":false,
               "link":"#",
               "icon":"fa-picture-o",
               "disable":false
            }
         ]
      },

      
     {  
      "title":"No child   1",
      "checked":false,
      "link":"#",
      "icon":"fa-ravelry",
      "childrens":[ ]
     },

      {  
        "title":"PDF",
        "checked":false,
        "link":"#",
        "icon":"fa-file-pdf-o",
        "childrens":[  
           {  
              "title":"pdf 1",
              "checked":false,
              "link":"#",
              "icon":"fa-id-card-o",
              "disable":false
           },
           {  
              "title":"pdf 2",
              "checked":false,
              "link":"#",
              "icon":"fa-id-card-o",
              "disable":false
           },
           {  
              "title":"pdf 3",
              "checked":false,
              "link":"#",
              "icon":"fa-id-card-o",
              "disable":false
           }
        ]
     },


     {  
      "title":"No child   2",
      "checked":false,
      "link":"#",
      "icon":"fa-file-pdf-o",
      "childrens":[ ]
     }
   ];
  }

  toggleAccordion(val,event) {
   
    if(this.toggleItem === val) {
      if(event.target.type === 'checkbox') {return;}
      this.toggleItem = '';
    } else {
      this.toggleItem = val
    }
  }

  changeCheckbox(index) {
    this.data[index].checked = !this.data[index].checked;
    this.data[index].childrens.forEach(element => {
      element.checked = this.data[index].checked;
    });

  }
  

  changeChildCheckbox(index){
    let notChecked =0,checkedItem =0;
    this.data[index].childrens.forEach(element => {
      if(!element.checked){
        notChecked++;
      }
      if(element.checked){
        checkedItem++;
      }
    });

    if(this.data[index].length === notChecked-1){
      this.data[index].checked = false;
    }

    if(this.data[index].length === checkedItem-1){
      this.data[index].checked = true;
    }
  }


  disEnableThisRow(item){
    item.disable = !item.disable
  }
}
