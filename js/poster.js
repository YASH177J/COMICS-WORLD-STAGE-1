AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "avenger",
        title: "AVENGERS ENDGAME",
        url: "./assets/avenger.jpg",
      },
      {
        id: "panther",
        title: "BLACK PANTHER",
        url: "./assets/panther.jpg",
      },
      {
        id: "spider-man",
        title: "SPIDER MAN",
        url: "./assets/spiderman.jpg",
      },
      {
        id: "thor",
        title: "THOR-RAGNORAK",
        url: "./assets/thor.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;


      // Border Element
      const borderEl = this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      // Title Text Element
      const titleEl = this.createTitle(item,position)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"ring",
      radiusInner: 9,
      radiusOuter: 10,
    })
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color:"black",
      opacity: 0.5
    })
    return entityEl
  },
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"box",
      height:20,
      width:20
    })
    entityEl.setAttribute("material",{
      src:item.url
    })
    return entityEl
  },
  createTitle: function(item,position){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text",{
      font:"exo2bold",
      width:60,
      color:"blue",
      align:"center",
      value:item.title
    })
    const elPosition = position
    elPosition.y = -20
    entityEl.setAttribute("position",elPosition)
    entityEl.setAttribute("visible",true)
    return entityEl
  }
});
