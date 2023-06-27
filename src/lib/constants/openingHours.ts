export const OPENING_HOURS = {
	Montag: {
		opening: 10,
		closing: 19
	},
	Dienstag: {
		opening: 10,
		closing: 19
	},
	Mittwoch: {
		opening: 10,
		closing: 19
	},
	Donnerstag: {
		opening: 10,
		closing: 19
	},
	Freitag: {
		opening: 10,
		closing: 19
	},
	Samstag: {
		opening: 10,
		closing: 18
	},
	Sonntag: {
		opening: 0,
		closing: 0
	}
} as const;

export function currentlyOpen() {
	const now = new Intl.DateTimeFormat('de-DE', {
		weekday: 'long',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	}).formatToParts(new Date());

	const day = now.find(({ type }) => type === 'weekday')?.value;
	const hour = Number(now.find(({ type }) => type === 'hour')?.value);
	const minute = Number(now.find(({ type }) => type === 'minute')?.value);

	const openingHours = OPENING_HOURS[day as keyof typeof OPENING_HOURS];

	if (!openingHours) {
		return false;
	}

	const { opening, closing } = openingHours;

	//opening === 0 && closing === 0 is Sonntag
	if (opening === 0 && closing === 0) {
		return false;
	}

	//hour < opening || hour > closing is outside of opening hours
	if (hour < opening || hour > closing) {
		return false;
	}

	//hour === opening && minute < 0 is before opening
	if (hour === opening && minute < 0) {
		return false;
	}

	//hour === closing && minute > 0 is after closing
	if (hour === closing && minute > 0) {
		return false;
	}

	return true;
}
