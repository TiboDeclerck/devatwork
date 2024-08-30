import React from 'react'

const Tab = ({ tabComponents = [] }) => {
	return (
		<>
			<div className='flex justify-between border-b border-gray-300'>
				{tabComponents.map((Component, index) => (
					<div className='py-1 px-4'>
						<Component key={`tab-${index}`} />
					</div>
				))}
			</div>
		</>
	)
}

export default Tab
