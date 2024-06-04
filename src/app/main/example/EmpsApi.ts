import { createSelector } from '@reduxjs/toolkit';
import { apiService as api } from 'app/store/apiService';
import FuseUtils from '@fuse/utils';
export const addTagTypes = ['emps_item', 'emps', 'contacts_tag', 'contacts_tags', 'countries'] as const;

const EmpsApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			/////////////////////////////////////////////////////////////////////
			getEmpsList: build.query<GetEmpsListApiResponse, GetEmpsListApiArg>({
				query: () => ({ url: `/mock-api/emps` }),
				providesTags: ['emps']
			}),
			// createContactsItem: build.mutation<CreateContactsItemApiResponse, CreateContactsItemApiArg>({
			// 	query: (queryArg) => ({
			// 		url: `/mock-api/contacts`,
			// 		method: 'POST',
			// 		data: queryArg.contact
			// 	}),
			// 	invalidatesTags: ['contacts']
			// }),

			////////////////////////////////////////////////////////////////////
			getEmpsItem: build.query<GetEmpsItemApiResponse, GetEmpsItemApiArg>({
				query: (empId) => ({ url: `/mock-api/emps/${empId}` }),
				providesTags: ['emps_item']
			}),

			// updateContactsItem: build.mutation<UpdateContactsItemApiResponse, UpdateContactsItemApiArg>({
			// 	query: (contact) => ({
			// 		url: `/mock-api/contacts/${contact.id}`,
			// 		method: 'PUT',
			// 		data: contact
			// 	}),
			// 	invalidatesTags: ['contacts_item', 'contacts']
			// }),
			// deleteContactsItem: build.mutation<DeleteContactsItemApiResponse, DeleteContactsItemApiArg>({
			// 	query: (contactId) => ({
			// 		url: `/mock-api/contacts/${contactId}`,
			// 		method: 'DELETE'
			// 	}),
			// 	invalidatesTags: ['contacts']
			// }),
			// getContactsTag: build.query<GetContactsTagApiResponse, GetContactsTagApiArg>({
			// 	query: (tagId) => ({ url: `/mock-api/contacts/tags/${tagId}` }),
			// 	providesTags: ['contacts_tag']
			// }),
			// updateContactsTag: build.mutation<UpdateContactsTagApiResponse, UpdateContactsTagApiArg>({
			// 	query: (tag) => ({
			// 		url: `/mock-api/contacts/tags/${tag.id}`,
			// 		method: 'PUT',
			// 		body: tag
			// 	}),
			// 	invalidatesTags: ['contacts_tags']
			// }),
			// deleteContactsTag: build.mutation<DeleteContactsTagApiResponse, DeleteContactsTagApiArg>({
			// 	query: (tagId) => ({
			// 		url: `/mock-api/contacts/tags/${tagId}`,
			// 		method: 'DELETE'
			// 	}),
			// 	invalidatesTags: ['contacts_tags']
			// }),
			// getContactsTags: build.query<GetContactTagsApiResponse, GetContactTagsApiArg>({
			// 	query: () => ({ url: `/mock-api/contacts/tags` }),
			// 	providesTags: ['contacts_tags']
			// }),
			// getContactsCountries: build.query<GetContactsCountriesApiResponse, GetContactsCountriesApiArg>({
			// 	query: () => ({ url: `/mock-api/countries` }),
			// 	providesTags: ['countries']
			// }),
			// createContactsTag: build.mutation<CreateContactsTagApiResponse, CreateContactsTagApiArg>({
			// 	query: (queryArg) => ({
			// 		url: `/mock-api/contacts/tags`,
			// 		method: 'POST',
			// 		body: queryArg.tag
			// 	}),
			// 	invalidatesTags: ['contacts_tags']
			// })
		}),
		overrideExisting: false
	});

export default EmpsApi;

export const {
	useGetEmpsItemQuery,
	useGetEmpsListQuery,
} = EmpsApi;

// export type GetEmpsListApiResponse ={
// 	[key: string]: Emp[];
// };
export type GetEmpsListApiResponse = Emp[];
export type GetEmpsListApiArg = void;

export type GetEmpsItemApiResponse = /** status 201 Created */ Emp;
export type GetEmpsItemApiArg = string;

export type Emp = {
    img: string;
	id: string;
	name1?: string;
	name2?: string;
	name3: string;
	name4?: string;
	position?: string;
	employmentDate?: string;
	workingYear?: string;
	birthday?: string;
	email?: string;
	isField?: string;
	fieldName?: string;
};

export type EmpsApiType = {
	[EmpsApi.reducerPath]: ReturnType<typeof EmpsApi.reducer>;
};



// export type GetContactsItemApiResponse = /** status 200 User Found */ Contact;
// export type GetContactsItemApiArg = string;

// export type UpdateContactsItemApiResponse = /** status 200 Contact Updated */ Contact;
// export type UpdateContactsItemApiArg = Contact;

// export type DeleteContactsItemApiResponse = unknown;
// export type DeleteContactsItemApiArg = string;

// export type GetContactsListApiResponse = /** status 200 OK */ Contact[];
// export type GetContactsListApiArg = void;

// export type CreateContactsItemApiResponse = /** status 201 Created */ Contact;
// export type CreateContactsItemApiArg = {
// 	contact: Contact;
// };

// export type GetContactsTagApiResponse = /** status 200 Tag Found */ Tag;
// export type GetContactsTagApiArg = string;

// export type GetContactsCountriesApiResponse = /** status 200 */ Country[];
// export type GetContactsCountriesApiArg = void;

// export type UpdateContactsTagApiResponse = /** status 200 */ Tag;
// export type UpdateContactsTagApiArg = Tag;

// export type DeleteContactsTagApiResponse = unknown;
// export type DeleteContactsTagApiArg = string;

// export type GetContactTagsApiResponse = /** status 200 OK */ Tag[];
// export type GetContactTagsApiArg = void;

// export type CreateContactsTagApiResponse = /** status 200 OK */ Tag;
// export type CreateContactsTagApiArg = {
// 	tag: Tag;
// };

// export type ContactPhoneNumber = {
// 	country: string;
// 	phoneNumber: string;
// 	label?: string;
// };

// export type ContactEmail = {
// 	email: string;
// 	label?: string;
// };

// export type Contact = {
// 	id: string;
// 	avatar?: string;
// 	background?: string;
// 	name: string;
// 	emails?: ContactEmail[];
// 	phoneNumbers?: ContactPhoneNumber[];
// 	title?: string;
// 	company?: string;
// 	birthday?: string;
// 	address?: string;
// 	notes?: string;
// 	tags?: string[];
// };

// export type Tag = {
// 	id: string;
// 	title: string;
// };

// export type Country = {
// 	id?: string;
// 	title?: string;
// 	iso?: string;
// 	code?: string;
// 	flagImagePos?: string;
// };

// export type GroupedContacts = {
// 	group: string;
// 	children?: Contact[];
// };

// export type AccumulatorType = {
// 	[key: string]: GroupedContacts;
// };



// export const {
// 	useGetContactsItemQuery,
// 	useUpdateContactsItemMutation,
// 	useDeleteContactsItemMutation,
// 	useGetContactsListQuery,
// 	useCreateContactsItemMutation,
// 	useGetContactsTagQuery,
// 	useGetContactsCountriesQuery,
// 	useUpdateContactsTagMutation,
// 	useDeleteContactsTagMutation,
// 	useGetContactsTagsQuery,
// 	useCreateContactsTagMutation
// } = ContactsApi;

// export type ContactsApiType = {
// 	[ContactsApi.reducerPath]: ReturnType<typeof ContactsApi.reducer>;
// };

// /**
//  * Select filtered contacts
//  */
// export const selectFilteredContactList = (contacts: Contact[]) =>
// 	createSelector([selectSearchText], (searchText) => {
// 		if (!contacts) {
// 			return [];
// 		}

// 		if (searchText.length === 0) {
// 			return contacts;
// 		}

// 		return FuseUtils.filterArrayByString<Contact>(contacts, searchText);
// 	});

// /**
//  * Select grouped contacts
//  */
// export const selectGroupedFilteredContacts = (contacts: Contact[]) =>
// 	createSelector([selectFilteredContactList(contacts)], (contacts) => {
// 		if (!contacts) {
// 			return [];
// 		}

// 		const sortedContacts = [...contacts]?.sort((a, b) =>
// 			a?.name?.localeCompare(b.name, 'es', { sensitivity: 'base' })
// 		);

// 		const groupedObject: {
// 			[key: string]: GroupedContacts;
// 		} = sortedContacts?.reduce<AccumulatorType>((r, e) => {
// 			// get first letter of name of current element
// 			const group = e.name[0];

// 			// if there is no property in accumulator with this letter create it
// 			if (!r[group]) r[group] = { group, children: [e] };
// 			// if there is push current element to children array for that letter
// 			else {
// 				r[group]?.children?.push(e);
// 			}

// 			// return accumulator
// 			return r;
// 		}, {});

// 		return groupedObject;
// 	});
