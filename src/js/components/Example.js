{list.map(item => (
				<div>
						<div key={item.id}>
							<div>{item.id}</div>
							<div>{item.firstname}</div>
							<div>{item.lastname}</div>
							<div>{item.year}</div>
						</div>
				</div>
					))}