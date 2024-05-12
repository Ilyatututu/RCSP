import { catalog } from 'src/catalogs/entities/catalog.entity';
import {
Column,
Entity,
JoinTable,
ManyToMany,
PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('articles')
export class Article {
@PrimaryGeneratedColumn ()
    id: number;
@Column()
    name: string;
@Column()
    keywords: string;
@Column()
    abstract: string;
@ManyToMany((type) => catalog, (catalog) => catalog.articles)
@JoinTable({
    name: 'catalog_article',
    joinColumn: { name: 'article_id' },
    inverseJoinColumn: { name: 'catalog_id' },
    })
catalogs: catalog[];
}