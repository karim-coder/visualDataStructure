// <!DOCTYPE html>
// <html>
//   <head>
//     <title>VDS Logo</title>
//     <style>
//       body {
//         background-color: #292929;
//         margin: 0;
//         padding: 0;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//       }

//       .logo {
//         perspective: 1000px;
//         transform-style: preserve-3d;
//       }

//       .cube {
//         position: relative;
//         width: 200px;
//         height: 200px;
//         transform-style: preserve-3d;
//         animation: spin 10s infinite linear;
//       }

//       .face {
//         position: absolute;
//         width: 200px;
//         height: 200px;
//         opacity: 0.6;
//         text-align: center;
//         line-height: 200px;
//         font-size: 80px;
//         font-weight: bold;
//         color: #f2f2f2;
//         background-color: #292929;
//       }

//       .face--front {
//         transform: translateZ(100px) rotateY(0deg);
//       }

//       .face--back {
//         transform: translateZ(-100px) rotateY(180deg);
//       }

//       .face--right {
//         transform: translateX(100px) rotateY(90deg);
//       }

//       .face--left {
//         transform: translateX(-100px) rotateY(-90deg);
//       }

//       .face--top {
//         transform: translateY(-100px) rotateX(90deg);
//       }

//       .face--bottom {
//         transform: translateY(100px) rotateX(-90deg);
//       }

//       @keyframes spin {
//         from {
//           transform: rotateY(0deg);
//         }
//         to {
//           transform: rotateY(360deg);
//         }
//       }
//     </style>
//   </head>
//   <body>
//     <div class="logo">
//       <div class="cube">
//         <div class="face face--front">V</div>
//         <div class="face face--back">D</div>
//         <div class="face face--right">S</div>
//         <div class="face face--left"></div>
//         <div class="face face--top"></div>
//         <div class="face face--bottom"></div>
//       </div>
//     </div>
//   </body>
// </html>
