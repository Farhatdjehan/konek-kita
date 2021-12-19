export const editPage = {
	editProfil: {
		id: 'editProfil',
		text: 'Edit Profile',
		path: '/edit-profile',
		icon: 'QrCode2',
	},
};

export const dashboardMenu = {
	dashboardBooking: {
		id: 'overview',
		text: 'Overview',
		path: '/',
		icon: 'Info',
	},
	profilId: {
		id: 'profilId',
		text: 'Profil User',
		path: '/profil-user/1',
		icon: 'Person',
	},
	galleryUmkm: {
		id: 'galleryUmkm',
		text: 'Gallery UMKM Program',
		path: '/gallery-umkm',
		icon: 'CalendarViewMonth',
	},
	detailProduct: {
		id: 'detailProduct',
		text: 'detailProduct',
		path: '/gallery-umkm/detail',
		hide: true,
	},
	premiumContent: {
		id: 'editInModal',
		text: 'Premium Content ',
		path: '/edit-pages/in-modal',
		icon: 'PictureInPicture',
	},
	galleryPremium: {
		id: 'galleryContent',
		text: 'Gallery Content',
		path: '/gallery-content',
		icon: 'ImportContacts',
	},
	galleryBootcamp: {
		id: 'galleryBootcamp',
		text: 'Gallery Bootcamp',
		path: '/gallery-bootcamp',
		icon: 'SettingsApplications',
	},
	openWorkList: {
		id: 'openWorkList',
		text: 'Open Work List',
		path: '/open-work',
		icon: 'AutoStories',
	},
	collabsList: {
		id: 'openCollabsList',
		text: 'Collaboration List',
		path: '/collabs-list',
		icon: 'AutoStories',
	},
	reqWorkList: {
		id: 'reqWorkList',
		text: 'Request Work List',
		path: '/request-work',
		icon: 'WorkOutline',
	},
	reqCollabsList: {
		id: 'reqCollabsList',
		text: 'Request Collab List',
		path: '/request-collabs',
		icon: 'ListAlt',
	},
	openCollaboration: {
		id: 'openCollaboration',
		text: 'Open Collaboration',
		path: '/open-collaboration',
		icon: 'GroupAdd',
	},
};

export const menuSidebar = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},

	auth: {
		id: 'auth',
		text: 'Auth Pages',
		icon: 'Extension',
	},
	login: {
		id: 'login',
		text: 'Login',
		path: '/login',
		icon: 'Login',
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: '/sign-up',
		icon: 'PersonAdd',
	},

	page404: {
		id: 'Page404',
		text: '404 Page',
		path: '/auth-pages/404',
		icon: 'ReportGmailerrorred',
	},

	app: {
		id: 'app',
		text: 'Apps',
		icon: 'Extension',
	},

	sales: {
		id: 'sales',
		text: 'Sales',
		path: '/sales',
		icon: 'Store',
		subMenu: {
			dashboard: dashboardMenu.dashboard,
			salesList: {
				id: 'products',
				text: 'Sales List',
				path: '/sales/sales-list',
				icon: 'FactCheck',
			},
			// productsGrid: {
			// 	id: 'productsGrid',
			// 	text: 'Products Grid',
			// 	path: '/sales/grid',
			// 	icon: 'CalendarViewMonth',
			// },
		},
	},
	appointment: {
		id: 'appointment',
		text: 'Appointment',
		path: '/appointment',
		icon: 'Today',
		subMenu: {
			dashboard: dashboardMenu.dashboardBooking,
			calendar: {
				id: 'calendar',
				text: 'Calendar',
				path: '/appointment/calendar',
				icon: 'EditCalendar',
				notification: true,
			},
			employeeList: {
				id: 'employeeList',
				text: 'Employee List',
				path: '/appointment/employee-list',
				icon: 'PersonSearch',
			},
			employeeID: {
				id: 'employeeID',
				text: 'employeeID',
				path: '/appointment/employee',
				hide: true,
			},

			appointmentList: {
				id: 'appointmentList',
				text: 'Appointment List',
				path: '/appointment/appointment-list',
				icon: 'Event',
			},
		},
	},
	chat: {
		id: 'chat',
		text: 'Chat',
		path: '/chat',
		icon: 'Forum',
		subMenu: {
			withListChat: {
				id: 'withListChat',
				text: 'With List',
				path: '/chat/with-list',
				icon: 'Quickreply',
			},
			onlyListChat: {
				id: 'onlyListChat',
				text: 'Only List',
				path: '/chat/only-list',
				icon: 'Dns',
			},
		},
	},
};

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: '/grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
