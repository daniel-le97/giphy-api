// @ts-nocheck
export class Gift {
  constructor(data) {
    this.tag = data.tag;
    this.url = data.url;
    this.opened = data.opened || false;
  }

  get GiftTemplate() {
    return;
    /*html*/ `
      <div class="col-3 card m-3">
              <div class="card-body">
                <img
                  src="https://thiscatdoesnotexist.com"
                  alt=""
                  class="img-fluid" />
                <p class="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, perspiciatis?
                </p>
              </div>
            </div>    
    `;
  }
}

// export class SandboxGifts extends Gift {
//   constructor(data) {
//     super(data);
//   }
//   get GiftTemplate() {
//     return;
//     /*html*/ `
//       <div class="col-3 card m-3">
//               <div class="card-body">
//                 <img
//                   src="https://thiscatdoesnotexist.com"
//                   alt=""
//                   class="img-fluid" />
//                 <p class="text-center">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Nostrum, perspiciatis?
//                 </p>
//               </div>
//             </div>
//     `;
//   }
// }
