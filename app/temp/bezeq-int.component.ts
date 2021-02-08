import IComponentOptions = angular.IComponentOptions;


class BezeqIntComponent{
    name:string = 'Eyal Vardi';
    foo(){
        this.name+= '!';
    }
}

export const bezeqIntComponent : IComponentOptions = {
    controller: BezeqIntComponent,
    template : `
    <div>
        <h3>Bezeq Int</h3>
    </div>
`};