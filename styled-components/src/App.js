import styled from "styled-components";

const Breadcrumbs = ({ children }) => {
	return (
		<nav aria-label="Breadcrumb">
			<BreadcrumbList>{children}</BreadcrumbList>
		</nav>
	);
};

const Crumb = ({ href, isCurrentPage, children }) => {
	return (
		<CrumbWrapper>
			<Link href={href} aria-current={isCurrentPage ? "page" : undefined}>
				{children}
			</Link>
		</CrumbWrapper>
	);
};

const BreadcrumbList = styled.ol`
	padding: 0;
	margin: 0;
	list-style-type: none;
`;

const CrumbWrapper = styled.li`
	display: inline;
	--spacing: 8px;

	&:not(:first-of-type) {
		margin-left: var(--spacing);

		&:before {
			content: "";
			display: inline-block;
			transform: rotate(15deg);
			border-right: 1px solid;
			margin-right: var(--spacing);
			height: 0.8em;
		}
	}
`;

const Link = styled.a`
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: revert;
	}
`;

const App = () => (
	<Breadcrumbs>
		<Crumb href="/">Home</Crumb>
		<Crumb href="/living">Living Room</Crumb>
		<Crumb href="/living/couch">Couches</Crumb>
		<Crumb href="/living/couch/sectional" isCurrentPage>
			Sectionals
		</Crumb>
	</Breadcrumbs>
);

export default App;
