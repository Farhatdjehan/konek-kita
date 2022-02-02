export const editPage = {
	editProfil: {
		id: 'editProfil',
		text: 'Edit Profile',
		path: '/edit-profile',
		icon: 'QrCode2',
	},
};

export const personalMenu = {
	personal: {
		id: 'personal',
		text: 'Personal',
	},
	dashboardBooking: {
		id: 'overview',
		text: 'Overview',
		path: '/',
		icon: 'Info',
	},
	premiumContentList: {
		id: 'premiumContentList',
		text: 'List Content Premium',
		path: '/premium-content/list',
		icon: 'ListAlt',
	},
	// premiumContent: {
	// 	id: 'premiumContent',
	// 	text: 'Premium Content ',
	// 	path: '/premium-content/',
	// 	icon: 'PictureInPicture',
	// 	subMenu: {
	// 		tablePremiumContent: {
	// 			id: 'editInModal',
	// 			text: 'Table Premium',
	// 			path: '/premium-content/add',
	// 			icon: 'Table',
	// 		},
	// 		liveSessionContent: {
	// 			id: 'liveSessionContent',
	// 			text: 'Live Session Content',
	// 			path: '/live-session/detail',
	// 			hide: true,
	// 		},
	// 	},
	// },
	myBadge: {
		id: 'myBadge',
		text: 'Badge Saya',
		path: '/my-badge/',
		icon: 'Badge',
		// subMenu: {
		// 	mybadge: {
		// 		id: 'mybadge',
		// 		text: 'Badge Saya',
		// 		path: '/my-badge',
		// 		icon: 'Badge',
		// 	},
		// 	certificateList: {
		// 		id: 'certificateList',
		// 		text: 'Certificate List',
		// 		path: '/my-badge/certificate-list',
		// 		icon: 'List',
		// 		hide: true,
		// 	},
		// 	detailCampaign: {
		// 		id: 'detailCampaign',
		// 		text: 'Detail Campaign',
		// 		path: '/detail-campaign',
		// 		icon: 'History',
		// 		hide: true,
		// 	},
		// 	sendBadgeLove: {
		// 		id: 'sendBadgeLove',
		// 		text: 'Send Badge Love',
		// 		path: '/send-badge/',
		// 		icon: 'Send',
		// 		hide: true,
		// 	},
		// 	certificateUpload: {
		// 		id: 'certificateUpload',
		// 		text: 'Upload Sertifikat',
		// 		path: '/upload-certificate',
		// 		icon: 'Upload',
		// 		hide: true,
		// 	},
		// 	sendBadgeDetail: {
		// 		id: 'sendBadgeDetail',
		// 		text: 'History Send Badge',
		// 		path: '/send-badge/history',
		// 		icon: 'History',
		// 		hide: true,
		// 	},
		// },
	},
	shareSupport: {
		id: 'shareSupport',
		text: 'Sebarkan Koneksi',
		path: '/sebarkan-koneksi',
		icon: 'Share',
	},

	detailPremiumContent: {
		id: 'detailPremiumContent',
		text: 'Detail Content Premium',
		path: '/premium-content/detail',
		hide: true,
	},
};
export const generalMenu = {
	general: {
		id: 'general',
		text: 'General',
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
			deliverableProgram: {
				id: 'deliverableProgram',
				text: 'Deliverable Program',
				path: '/umkm/deliverable-program',
				icon: 'SendAndArchive',
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

	worklist: {
		id: 'worklist',
		text: 'Campaign List',
		path: '/campaign',
		icon: 'AutoStories',
		subMenu: {
			openWorkList: {
				id: 'openWorkList',
				text: 'Katalog Campaign',
				path: '/campaign/open-campaign',
				icon: 'AutoStories',
			},
			detailProgramOpenWorker: {
				id: 'detailProgramOpenWork',
				text: 'Detail Program Open Campaign',
				path: '/campaign/open-campaign/detail',
				hide: true,
			},
			reqWorkList: {
				id: 'reqWorkList',
				text: 'Incoming Work',
				path: '/campaign/incoming-campaign',
				icon: 'WorkOutline',
			},
			detailProgram: {
				id: 'detailProgram',
				text: 'Detail Program',
				path: '/campaign/request-campaign/detail',
				hide: true,
			},
			directCampaign: {
				id: 'directCampaign',
				text: 'Direct Campaign',
				path: '/campaign/direct',
				icon: 'Campaign',
				hide: true,
			},
			katalogDirectCampaign: {
				id: 'katalogDirectCampaign',
				text: 'Katalog Direct Campaign',
				path: '/campaign/katalog-direct',
				icon: 'Campaign',
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
				text: 'Incoming Collaboration',
				path: '/collaboration/incoming-collabs',
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
				text: 'My Collaboration',
				path: '/collaboration/my-collaboration',
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
				text: 'Katalog Collaboration',
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
	menuNFT: {
		id: 'menuNFT',
		text: 'NFT List',
		path: '/nft',
		icon: 'Image',
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
	joinKomunitas: {
		id: 'joinKomunitas',
		text: 'Join Komunitas',
		path: '/sebarkan-koneksi/join-komunitas',
		hide: true,
	},
	saldo: {
		id: 'saldo',
		text: 'Saldo Anda',
		path: '/saldo',
		hide: true,
	},
	detailPortofolio: {
		id: 'detailPortofolio',
		text: 'Detail Portofolio',
		path: '/portofolio/detail',
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

	// sales: {
	// 	id: 'sales',
	// 	text: 'Sales',
	// 	path: '/sales',
	// 	icon: 'Store',
	// 	subMenu: {
	// 		dashboard: dashboardMenu.dashboard,
	// 		salesList: {
	// 			id: 'products',
	// 			text: 'Sales List',
	// 			path: '/sales/sales-list',
	// 			icon: 'FactCheck',
	// 		},
	// 		// productsGrid: {
	// 		// 	id: 'productsGrid',
	// 		// 	text: 'Products Grid',
	// 		// 	path: '/sales/grid',
	// 		// 	icon: 'CalendarViewMonth',
	// 		// },
	// 	},
	// },
	// appointment: {
	// 	id: 'appointment',
	// 	text: 'Appointment',
	// 	path: '/appointment',
	// 	icon: 'Today',
	// 	subMenu: {
	// 		dashboard: dashboardMenu.dashboardBooking,
	// 		calendar: {
	// 			id: 'calendar',
	// 			text: 'Calendar',
	// 			path: '/appointment/calendar',
	// 			icon: 'EditCalendar',
	// 			notification: true,
	// 		},
	// 		employeeList: {
	// 			id: 'employeeList',
	// 			text: 'Employee List',
	// 			path: '/appointment/employee-list',
	// 			icon: 'PersonSearch',
	// 		},
	// 		employeeID: {
	// 			id: 'employeeID',
	// 			text: 'employeeID',
	// 			path: '/appointment/employee',
	// 			hide: true,
	// 		},

	// 		appointmentList: {
	// 			id: 'appointmentList',
	// 			text: 'Appointment List',
	// 			path: '/appointment/appointment-list',
	// 			icon: 'Event',
	// 		},
	// 	},
	// },
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
