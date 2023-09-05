import {StructureBuilder} from 'sanity/desk'
import {ControlsIcon, CogIcon, MenuIcon, EnvelopeIcon, HomeIcon, DocumentsIcon} from '@sanity/icons'

export const customStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(ControlsIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(CogIcon)
                .child(S.document().schemaType('metadata').documentId('metadata')),
              S.listItem()
                .title('Header')
                .icon(MenuIcon)
                .child(S.document().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .icon(EnvelopeIcon)
                .child(S.document().schemaType('footer').documentId('footer')),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('Projects')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('Projects Page')
                .icon(CogIcon)
                .child(S.document().schemaType('projectsPage').documentId('projectsPage')),
              S.divider(),
              S.listItem()
                .title('All Projects')
                .icon(DocumentsIcon)
                .schemaType('project')
                .child(S.documentTypeList('project').title('All Projects').showIcons()),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['metadata', 'header', 'footer', 'home', 'project', 'projectsPage'].includes(
            listItem.getId() as string,
          ),
      ),
    ])
}
