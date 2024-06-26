import { IntegerType } from "typeorm";
import { Affiliation} from 'src/affiliations/entities/affiliation.entity';
import { Article} from 'src/articles/entities/article.entity';
import {
Column,
Entity,
JoinTable,
ManyToMany,
PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('catalogs')
export class catalog {
@PrimaryGeneratedColumn()
id: number;
@Column({})
category: string;
@Column()
    price: IntegerType;
@ManyToMany((type) => Article, (article) => article.catalogs)
@JoinTable({
name: 'catalog_article',
joinColumn: { name: 'catalog_id' },
inverseJoinColumn: { name: 'article_id' }
})
articles: Article[];
@ManyToMany((type) => Affiliation, (affiliation) => affiliation.catalogs)
@JoinTable({
name: 'catalog_affiliation',
joinColumn: { name: 'catalog_id' },
inverseJoinColumn: { name: 'affiliation_id' },
})
affiliations: Affiliation[];
}