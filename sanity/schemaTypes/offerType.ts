import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType} from "sanity";


export const offerType = defineType({
    name: 'offers',
    title: 'Oferty',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: 'plname',
            title: 'Nazwa PL',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'enname',
            title: 'Nazwa EN',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'plname',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Zdjęcie Oferty',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'price',
            title: 'Cena',
            type: 'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'people',
            title: 'Liczba Osób',
            description: 'Do ilu osób mniej więcej skierowana jest ta oferta',
            type: 'number',
            validation: Rule => Rule.required().min(1),
        }),
        defineField({
            name: 'minNights',
            title: 'Minimalne Noce',
            description: 'Minimalna liczba nocy dla tej oferty',
            type: 'number',
            validation: Rule => Rule.required().min(1),
        }),
        defineField({
            name: 'offerListing',
            title: 'Co jest wliczone',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'offerScope' } }],
            description: 'Wybierz co jest wliczone w tę ofertę',
        }),
        defineField({
            name: 'pldescription',
            title: 'Opis PL',
            type: 'blockContent',
        }),
        defineField({
            name: 'endescription',
            title: 'Opis EN',
            type: 'blockContent',
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Ważne Od',
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Ważne Do',
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Aktywne',
            description: 'Zaznacz aby aktywować sprzedaż',
            initialValue: true,
        }),
        defineField({
            name: "categories",
            title: "Kategorie",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stan Magazynowy",
            type: "number",
            validation: Rule => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            title: 'plname',
            media: 'image',
            price: 'price',
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `${select.price} PLN`,
                media: select.media,
            };
        },
    }
});