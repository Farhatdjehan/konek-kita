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
		id: 'premiumContent',
		text: 'Premium Content ',
		path: '/premium-content/',
		icon: 'PictureInPicture',
		subMenu: {
			tablePremiumContent: {
				id: 'editInModal',
				text: 'Table Premium',
				path: '/edit-pages/in-modal',
				icon: 'Table',
			},
			premiumContentList: {
				id: 'premiumContentList',
				text: 'List Content Premium',
				path: '/premium-content/list',
				icon: 'ListAlt',
			},
		},
	},
	sendBadge: {
		id: 'sendBadge',
		text: 'Badge ',
		path: '/send-badge/',
		icon: 'Badge',
		subMenu: {
			sendBadgeLove: {
				id: 'sendBadgeLove',
				text: 'Send Badge Love',
				path: '/send-badge/',
				icon: 'Send',
			},
			sendBadgeDetail: {
				id: 'sendBadgeDetail',
				text: 'History Send Badge',
				path: '/send-badge/history',
				icon: 'History',
			},
			mybadge: {
				id: 'mybadge',
				text: 'Badge Saya',
				path: '/my-badge',
				icon: 'Badge',
			},
			certificateUpload: {
				id: 'certificateUpload',
				text: 'Upload Sertifikat',
				path: '/upload-certificate',
				icon: 'Upload',
			},
			certificateList: {
				id: 'certificateList',
				text: 'Certificate List',
				path: '/my-badge/certificate-list',
				icon: 'List',
				hide: true,
			},
			detailCampaign: {
				id: 'detailCampaign',
				text: 'Detail Campaign',
				path: '/detail-campaign',
				icon: 'History',
				hide: true,
			},
		},
	},
	umkm: {
		id: 'umkm',
		text: 'UMKM',
		path: '/umkm/',
		icon: 'CalendarViewMonth',
		subMenu: {
			programGallery: {
				id: 'programGallery',
				text: 'Gallery Program UMKM',
				path: '/umkm/gallery-program',
				icon: 'CalendarViewMonth',
			},
			umkmProgram: {
				id: 'umkmProgram',
				text: 'Program UMKM',
				path: '/umkm/program',
				icon: 'CalendarViewMonth',
			},
		},
	},
	bootcamp: {
		id: 'bootcamp',
		text: 'Bootcamp',
		path: '/bootcamp/',
		icon: 'PictureInPicture',
		subMenu: {
			galleryBootcamp: {
				id: 'galleryBootcamp',
				text: 'Gallery Bootcamp',
				path: '/bootcamp/gallery-bootcamp',
				icon: 'SettingsApplications',
			},
			detailProgramBootcamp: {
				id: 'detailProgramBootcamp',
				text: 'Detail Program Bootcamp',
				path: '/bootcamp/gallery-bootcamp/detail',
				hide: true,
			},
		},
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

			detailProgramContent: {
				id: 'detailProgramContent',
				text: 'Detail Program Content',
				path: '/gallery/gallery-content/detail',
				hide: true,
			},

			detailPortofolio: {
				id: 'detailPortofolio',
				text: 'Detail Portofolio',
				path: '/portofolio/detail',
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
	shareSupport: {
		id: 'shareSupport',
		text: 'Sebarkan Koneksi',
		path: '/sebarkan-koneksi',
		icon: 'Share',
	},
	profilId: {
		id: 'profilId',
		text: 'Profil User',
		path: '/profil-user/1',
		icon: 'Person',
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
