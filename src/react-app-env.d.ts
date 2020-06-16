// 引用样式
declare module '*.module.sass' {
	const classes: {
		[key: string]: string;
	};
	export default classes;
}

// 图片预览组件
declare module 'react-zmage' {
	interface ISetProps {
		src: string; // 图片 Url
		alt?: string; // 图片占位文字
		style?: React.CSSProperties; // 图片样式
		className?: string; // 图片类名
	}
	interface IZmageProps {
		src: string; // 图片路径
		alt?: string; // 占位符
		style?: React.CSSProperties; // 图片样式
		set?: ISetProps[]; // 预览多张图片
		defaultPage?: number; // 打开默认页面
		radius?: number; // 预览圆角
	}
	const Zmage: React.ComponentClass<IZmageProps>;
	export default Zmage;
}

// 全局参数定义
declare interface Window {
	config: any; // 项目配置
	store: any; // 全局缓存状态
	location: any
}