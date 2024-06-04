import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import ContactModel from 'src/app/main/apps/contacts/models/ContactModel';
import { PartialDeep } from 'type-fest';
import { Contact } from 'src/app/main/apps/contacts/ContactsApi';
import mockApi from '../mock-api.json';
import ExtendedMockAdapter, { Params } from '../ExtendedMockAdapter';
import { Emp } from 'src/app/main/example/EmpsApi';

const empDB = mockApi.components.examples.emps.value as Emp[];

export const empsApiMocks = (mock: ExtendedMockAdapter) => {
	mock.onGet('/emps').reply(() => {
		return [200, empDB];
	});

	// mock.onPost('/contacts').reply(({ data }) => {
	// 	const newContact = ContactModel({
	// 		id: FuseUtils.generateGUID(),
	// 		...JSON.parse(data as string)
	// 	} as PartialDeep<Contact>);

	// 	contactsDB.push(newContact);

	// 	return [200, newContact];
	// });

	// mock.onGet('/contacts/tags').reply(() => {
	// 	return [200, tagsDB];
	// });

	mock.onGet('/emps/:id').reply((config) => {
		const { id } = config.params as Params;

		const emp = _.find(empDB, { id });

		if (emp) {
			return [200, emp];
		}

		return [404, 'Requested emp do not exist.'];
	});

	// mock.onPut('/contacts/:id').reply((config) => {
	// 	const { id } = config.params as Params;

	// 	const newData = JSON.parse(config.data as string) as Contact;

	// 	_.assign(_.find(contactsDB, { id }), newData);

	// 	return [200, _.find(contactsDB, { id })];
	// });

	// mock.onDelete('/contacts/:id').reply((config) => {
	// 	const { id } = config.params as Params;

	// 	_.remove(contactsDB, { id });

	// 	return [200, id];
	// });
};
