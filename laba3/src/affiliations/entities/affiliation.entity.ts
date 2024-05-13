import { catalog } from 'src/catalogs/entities/catalog.entity';
import {
    Column,
    Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('affiliations')
export class Affiliation {
@PrimaryGeneratedColumn()
    id: number;
@Column({ unique: true })
companyName: string;
@Column()
    address: string;
@ManyToMany((type) => catalog, (catalog) => catalog.affiliations)
@JoinTable({
    name: 'catalog_affiliation',
    joinColumn: { name: 'affiliation_id' },
    inverseJoinColumn: { name: 'catalog_id' },
    })
    catalogs: catalog[];
}