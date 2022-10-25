import React from "react";

export default function PokeModal({ modalState }) {
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{modalState.name}</h3>
          <p className="py-4">{"Abilities:"}</p>
          <div className="modal-action">
            <a href="#" className="btn">
              Add to Team!
            </a>
          </div>
        </label>
      </label>
    </div>
  );
}
