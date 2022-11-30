import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DividerModule} from 'primeng/divider';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';


@Component({
    selector: 'app-watch',
    templateUrl: './watch.component.html',
    styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
    images: any[] = [];
    loading: boolean = true;

    alta: any[] = [];
    recentes: any[] = [];
    curtidos: any[] = [];
    relevantes: any[] = [];
    materias: any[] = [
        {title: 'Portugês', path: 'https://www.educabras.com/media/subject/thumb_resized/portugues_portugues3.jpg'},
        {title: 'Matemática', path: 'https://www.educabras.com/media/subject/thumb_resized/matematica_matematica3.jpg'},
        {title: 'História', path: 'https://www.educabras.com/media/subject/thumb_resized/historia_historia3.jpg'},
        {title: 'Geografia', path: 'https://www.educabras.com/media/subject/thumb_resized/geografia_geografia4.jpg'},
        {title: 'Biologia', path: 'https://www.educabras.com/media/subject/thumb_resized/biologia_biologia3.jpg'},
        {title: 'Física', path: 'https://www.educabras.com/media/subject/thumb_resized/fisica_fisica3.jpg'},
        {title: 'Química', path: 'https://www.educabras.com/media/subject/thumb_resized/quimica_quimica3.jpg'},
        {title: 'Inglês', path: 'https://www.educabras.com/media/subject/thumb_resized/ingles_ingles3.jpg'},
    ];

    allVideos: any[] = [
        {
            title: 'Forma correta de estudar o portugês',
            path: 'https://portuguespratico.com/wp-content/uploads/2021/03/qual-a-ordem-correta-para-estudar-portugues.png'
        },
        {title: 'Gramática 1', path: 'https://i.ytimg.com/vi/YRRoVdreHZE/maxresdefault.jpg'},
        {title: 'Gramática 2', path: 'https://i.ytimg.com/vi/G6MDZ0TH1xs/maxresdefault.jpg'},
        {title: 'Oração e subordinação', path: 'https://i.ytimg.com/vi/q_7uchuBSRI/maxresdefault.jpg'},
        {title: 'Préfixo', path: 'https://i.ytimg.com/vi/T0HpwrwlXr0/mqdefault.jpg'},
        {title: 'Formação de palavras', path: 'https://i.ytimg.com/vi/XgvsBnHgU3Y/mqdefault.jpg'},
        {title: 'Conjunções', path: 'https://i.ytimg.com/vi/589N9KHjVGI/mqdefault.jpg'},
        {
            title: 'Equações',
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAi-OWPZJAhuUf5D8mn0ve9lXjESJATzltzg&usqp=CAU'
        },
        {
            title: 'Mega aulão matemática',
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VRKkq6xC5CbEovxzbKokp3_irMcFIXS7JQ&usqp=CAU'
        },
        {
            title: 'Matemática no coridiãno',
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VRKkq6xC5CbEovxzbKokp3_irMcFIXS7JQ&usqp=CAU'
        },
        {
            title: 'Proposta de atividade0',
            path: 'https://www.eloseducacional.com/wp-content/uploads/2021/04/Capa-Blog-3.png'
        },
        {title: 'O que é história?', path: 'https://i.ytimg.com/vi/g66RQXUypB0/maxresdefault.jpg'},
        {title: 'Introdução a história', path: 'https://i.ytimg.com/vi/bD9xHPJDOZ4/maxresdefault.jpg'},
        {title: 'Mini curso', path: 'https://blog.educalar.com.br/wp-content/uploads/2020/11/5.png'},
        {title: 'Velocidade média', path: 'https://i.ytimg.com/vi/wlTa_yTElGM/maxresdefault.jpg'},
        {title: 'Velocidade média 2', path: 'https://i.ytimg.com/vi/1oElVNKSMOE/maxresdefault.jpg'},
        {title: 'Velocidade média 3', path: 'https://i.ytimg.com/vi/VHOh4JVwFuI/maxresdefault.jpg'},
        {title: 'Plano de aula', path: 'https://www.buscarsaude.com.br/y/2876/plano-de-aula-educacao-fisica.jpg'},
    ];

    constructor() {
    }

    ngOnInit(): void {
        this.start();
    }

    start(): void {
        this.loading = false;

        this.alta = this.allVideos.map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);
        this.recentes = this.allVideos.map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);
        this.curtidos = this.allVideos.map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);
        this.relevantes = this.allVideos.map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);

    }

    seeVideo(video): void {
        console.log('video', video)
    }


}

