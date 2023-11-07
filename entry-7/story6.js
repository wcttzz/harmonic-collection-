const list=document.querySelector('.list'),
    item=document.querySelector('.list-item');

let source_node;

list.ondragstart=e=>{
    source_node=e.target;
    record(item);
    setTimeout(() => {
        e.target.classList.add('moving');
    }, 0);
    e.dataTransfer.effectAllowed='move';
}

list.ondragover=e=>{
    e.preventDefault();
}

list.ondragenter=e=>{
    e.preventDefault();
    if(e.target===list || e.target===source_node){
        return false;
    }
    const children=Array.from(list.children);
    const sourceIndex=children.indexOf(source_node);
    const targetIndex=children.indexOf(e.target);
    if(sourceIndex<targetIndex){
        list.insertBefore(source_node,e.target.nextElementSibling);
    }else{
        list.insertBefore(source_node,e.target);
    }
    last([e.target,source_node]);
}

list.ondragend=e=>{
    e.target.classList.remove('moving');
}
function record(eleAll){
    for(let i=0;i<eleAll.length;i++){
        const {top,left}=eleAll[i].getBoundingClientRect();
        eleAll[i]._top=top;
        eleAll[i]._left=left;

    }

}
function last(eleAll) {
    for (let i = 0; i < eleAll.length; i++) {
      const dom = eleAll[i];
      const { top, left } = dom.getBoundingClientRect();
      if (dom._left) {
        dom.style.transform = `translate3d(${dom._left - left}px, ${dom._top - top}px, 0px)`;
        let rafId = requestAnimationFrame(function () {
          dom.style.transition = 'transform 0.3s';
          dom.style.transform = 'none';
        });
        dom.addEventListener('transitioned', () => {
          dom.style.transition = 'none';
          cancelAnimationFrame(rafId);
        });
      }
    }
  }
  

