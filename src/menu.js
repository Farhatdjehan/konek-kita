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
	premiumContent: {
		id: 'editInModal',
		text: 'Premium Content ',
		path: '/edit-pages/in-modal',
		icon: 'PictureInPicture',
	},
	gallery: {
		id: 'gallery',
		text: 'Gallery',
		path: '/gallery',
		icon: 'PictureInPicture',
		subMenu: {
			galleryPremium: {
				id: 'galleryContent',
				text: 'Gallery Content',
				path: '/gallery/gallery-content',
				icon: 'ImportContacts',
			},
			galleryBootcamp: {
				id: 'galleryBootcamp',
				text: 'Gallery Bootcamp',
				path: '/gallery/gallery-bootcamp',
				icon: 'SettingsApplications',
			},
			galleryUmkm: {
				id: 'galleryUmkm',
				text: 'Gallery UMKM Program',
				path: '/gallery-umkm',
				icon: 'CalendarViewMonth',
			},
			detailProgramContent: {
				id: 'detailProgramContent',
				text: 'Detail Program Content',
				path: '/gallery/gallery-content/detail',
				hide: true,
			},
			detailProgramBootcamp: {
				id: 'detailProgramBootcamp',
				text: 'Detail Program Bootcamp',
				path: '/gallery/gallery-bootcamp/detail',
				hide: true,
			},
		},
	},
	worklist: {
		id: 'worklist',
		text: 'Work List',
		path: '/work',
		icon: 'AutoStories',
		subMenu: {
			openWorkList: {
				id: 'openWorkList',
				text: 'Open Work List',
				path: '/work/open-work',
				icon: 'AutoStories',
			},
			detailProgramOpenWorker: {
				id: 'detailProgramOpenWork',
				text: 'Detail Program Open Work',
				path: '/work/open-work/detail',
				hide: true,
			},
			reqWorkList: {
				id: 'reqWorkList',
				text: 'Request Work List',
				path: '/work/request-work',
				icon: 'WorkOutline',
			},
			detailProgram: {
				id: 'detailProgram',
				text: 'Detail Program',
				path: '/work/request-work/detail',
				hide: true,
			},
		},
	},
	collaboration: {
		id: 'collaboration',
		text: 'Collaboration',
		path: '/collaboration',
		icon: 'ListAlt',
		subMenu: {
			reqCollabsList: {
				id: 'reqCollabsList',
				text: 'Request Collab List',
				path: '/collaboration/request-collabs',
				icon: 'ListAlt',
			},
			detailProgramReqCollab: {
				id: 'detailProgramReqCollab',
				text: 'Detail Program Request Collab',
				path: '/collaboration/request-collabs/detail',
				hide: true,
			},
			openCollaboration: {
				id: 'openCollaboration',
				text: 'Open Collaboration',
				path: '/collaboration/open-collaboration',
				icon: 'GroupAdd',
			},
			detailProgramOpenCollab: {
				id: 'detailProgramOpenCollab',
				text: 'Detail Program Open Collab',
				path: '/collaboration/open-collaboration/detail',
				hide: true,
			},
			collabsList: {
				id: 'openCollabsList',
				text: 'Collaboration List',
				path: '/collaboration/collabs-list',
				icon: 'AutoStories',
			},
			detailProgramCollab: {
				id: 'detailProgramCollab',
				text: 'Detail Program Collab',
				path: '/collaboration/collabs-list/detail',
				hide: true,
			},
		},
	},
	detailProgram: {
		id: 'detailProgram',
		text: 'Detail Program',
		path: '/request-work/detail',
		hide: true,
	},
	detailProgramContent: {
		id: 'detailProgramContent',
		text: 'Detail Program Content',
		path: '/gallery-content/detail',
		hide: true,
	},
	profilId: {
		id: 'profilId',
		text: 'Profil User',
		path: '/profil-user/1',
		icon: 'Person',
		hide: true,
	},
	detailProgramBootcamp: {
		id: 'detailProgramBootcamp',
		text: 'Detail Program Bootcamp',
		path: '/gallery-bootcamp/detail',
		hide: true,
	},
	detailProgramCollab: {
		id: 'detailProgramCollab',
		text: 'Detail Program Collab',
		path: '/collabs-list/detail',
		hide: true,
	},
	detailProgramOpenCollab: {
		id: 'detailProgramOpenCollab',
		text: 'Detail Program Open Collab',
		path: '/open-collaboration/detail',
		hide: true,
	},
	detailProduct: {
		id: 'detailProduct',
		text: 'detailProduct',
		path: '/gallery-umkm/detail',
		hide: true,
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
