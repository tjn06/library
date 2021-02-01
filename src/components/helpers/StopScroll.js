

export default function StopScroll() {
  
    const mediaQNumber = 686;
    if(window.innerWidth < mediaQNumber) {
      window.scrollTo(0,0);
    } else {
      window.scrollTo(0,10);
    }
  
}

